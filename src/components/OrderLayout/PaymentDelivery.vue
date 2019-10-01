<template>
    <div class="mb-4 pt-4">
        <input type="text" :class="[(product === '') ? 'errorInp' : 'validInp']" class="w-100 p-2" placeholder="Что везём" v-model="product">
        <ul class="w-100 d-flex justify-content-start flex-wrap m-0 p-0 my-2">
            <li v-for="(el, ind) in list" :key="ind" class="mr-3" @click="getProduct(el)">{{el}}</li>
        </ul>
        <input type="text" :class="[(price === '') ? 'errorInp' : 'validInp']" class="p-2 price my-3" placeholder="Ценность" v-model="price">
        <p class="methods mb-2">Метод оплаты:</p>
        <div class="parCredit d-flex justify-content-start flex-wrap">
            <div :class="[chase ? 'credit' : 'creditPassive']" class="mr-3 mt-2" @click="chase = true">
                <img v-if="chase" class="m-2" src="../../../img/page5/Group 58activ.png" alt="Наличными">
                <img v-else class="m-2" src="../../../img/page5/Group 58.png" alt="Наличными">
                <p class="pt-2">Наличными&nbsp;курьеру<br><span>Рубли</span></p>
            </div>
            <div :class="[chase ? 'creditPassive' : 'credit']" class="mt-2" title="недоступен"> <!-- addressCount -->
                <img v-if="chase" class="m-2" src="../../../img/page5/Group 67passiv.png" alt="Картой">
                <img v-else class="m-2" src="../../../img/page5/Group 67.png" alt="Картой">
                <p class="pt-2">Картой&nbsp;онлайн<br><span>Visa/MasterCard и другие</span></p>
            </div>
        </div>
        <div v-if="promo" class="d-flex justify-content-start flex-wrap mb-4">
            <input type="text" class="mr-3 mt-3 p-2 errorInp" placeholder="Промокод" v-model="promoCode">
            <div class="mt-3 promoBtn text-center text-white" disabled>Применить</div>       <!-- change click -->
        </div>
        <p v-else class="promocode mt-3" @click="promo = true">У меня есть промокод</p>
    </div>
</template>

<script>
export default {
    name: 'PaymentDelivery', 
    // props: ['custom'], 
    data() {
        return {
            product: '',
            price: '',
            promoCode: '',
            promo: false,
            chase: true,
            list: [
                'Документы',
                'Продукты',
                'Подарок',
                'Цветы',
                'Торт',
                'Другое'
            ]
        }
    },
    methods: {
        getProduct(el){
            this.product = el;
        }
    },
    created() {
        },
    mounted() {
        if (localStorage.product) {
            this.product = localStorage.product;
        }
        if (localStorage.price) {
            this.price = localStorage.price;
        }
        if (localStorage.chase !== undefined) {
            this.chase = localStorage.chase;
        }
        if (localStorage.promoCode !== undefined) {
            this.promoCode = localStorage.promoCode;
        }
    },
    watch: {
        promoCode(updated){
            localStorage.promoCode = updated;
        },
        price(updated){
            localStorage.price = updated;
        },
        product(updated){
            localStorage.product = updated;
        },
        chase(updated){
            localStorage.chase = updated;
        },
        promo(updated){
            localStorage.promo = updated;
        },
    },
}
</script>

<style scoped>
.promoBtn{
    cursor: pointer;
    width: 120px;
    line-height: 39.2px;
    background-color: #62569c;
}
.promoBtn:hover{
    background-color: #524693;
}
.promocode{
    font-size: 9px;
    color: #524693;
    margin-bottom: 35px;
    cursor: pointer;
}
.parCredit span{
    font-size: 9px;
}
.parCredit div{
    user-select: none;
}
.creditPassive{
    cursor: pointer;
}
.creditPassive:hover{
    background-color: rgb(247, 247, 247);
}
.parCredit p{
    line-height: 100%;
    margin: 0;
    font-size: 13px;
}
.parCredit img{
    width: 29px;
    height: 29px;
    float: left;
}
.credit{
    width: 200px;
    border: 1px solid #62569c;
    color: #524693;
}
.creditPassive{
    width: 180px;
    border: 1px solid #cbc7dd;
    color: #c7c4e3;
}
.price{
    width: 130px;
}
input{
    font-size: 13px;
    /* outline: none; */
}
.validInp{
    border: 1px solid green;    
}
.errorInp{
    border: 1px solid #cbc7dd;    
}
ul, .methods{
    color: #524693;
    list-style-type: none;
}
ul>li{
    cursor: pointer;
}
</style>
