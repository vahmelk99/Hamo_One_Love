<template>
    <div>
        <MethodDelivery/>
        <DetailsDelivery/>
        <Addresses 
            v-for="address in addressData" 
            :key="address.id" 
            :address="address" 
            :last="addressData.length"
            @dataChange="saveAddress"
        />
        <b-alert
            :show="dismissCountDown"
            dismissible
            class="rounded-0"
            variant="warning"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
        >
            <p class="m-0">Вы не можете добавить больше чем 4 адресса</p>
        </b-alert>
        <div class="addAddressBtn py-2 px-4 text-white d-inline-block" @click="addAddress">
            + Добавить адрес
        </div>
        <PaymentDelivery/>
    </div>
</template>

<script>
import MethodDelivery from './MethodDelivery.vue' 
import DetailsDelivery from './DetailsDelivery.vue'
import PaymentDelivery from './PaymentDelivery.vue'
import Addresses from './Addresses.vue'

export default {
    name: 'DeliveryForm',
    components: {
        MethodDelivery,
        DetailsDelivery,
        Addresses,
        PaymentDelivery
    },
    data() {
        return {
            addressCount: 2,
            addressData: [
                {
                    id: 2,
                    map: '',
                    phone: '',
                    txtarea: '',
                    contactFace: '',
                    orderNumber: '',
                    selectSum: 0,
                    day: 'сегодня',
                    city: '',
                    kg: '',
                    length: '',
                    width: '',
                    height: '',
                    mosc: true
                }
            ],
            dismissSecs: 5,
            dismissCountDown: 0,
        }
    },
    mounted() {
        if (localStorage.getItem('addressData')) {
            try {
                this.addressData = JSON.parse(localStorage.getItem('addressData'));
            } catch(e) {
                localStorage.removeItem('addressData');
            }
        }
        if (localStorage.getAddress !== 'undefined') {
            this.addressData[0]['map'] = localStorage.getAddress;
                // console.log(this.addressData[0]['map']);
        }
        if (localStorage.addressCount !== 'undefined') {
            this.addressCount = localStorage.addressCount;
        }
    },
    created() {
        this.$root.$on('removeAddress', this.removeAddress);
    },
    watch: {
        addressCount(updated){
            localStorage.addressCount = updated;
        },
    },
    methods: {
        saveAddress() {
            const parsed = JSON.stringify(this.addressData);
            // console.log(parsed);
            localStorage.getAddress = this.addressData[0]['map'];
            localStorage.setItem('addressData', parsed);
        },
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        },
        removeAddress(id){
            this.addressData.splice(id - 2, 1);
            this.addressCount--;
            for (let i = id - 2; i < this.addressData.length; i++)
                this.addressData[i].id--;
        },
        addAddress(){
            (this.addressCount === undefined) && (this.addressCount = 2)
            if (this.addressCount < 4) {
                
                this.addressData.push(
                    {
                        id: ++this.addressCount,
                        map: '',
                        phone: '',
                        txtarea: '',
                        contactFace: '',
                        orderNumber: '',
                        selectSum: 0,
                        day: 'сегодня',
                        city: '',
                        kg: '',
                        length: '',
                        width: '',
                        height: '',
                        mosc: true
                    }
                );
            } else this.showAlert();
        }
    },
}
</script>

<style scoped>
.addAddressBtn{
    user-select: none;
    cursor: pointer;
    background-color: #f9b21f;
    border-radius: 22px;
    font-size: 16px;
}
p{
    color: #62569c;
}
</style>
