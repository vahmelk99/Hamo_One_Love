<template>
    <div class="app py-5 mb-5">
        <h1 class="headerTxt pt-1">Курьерская служба<br>доставки от 199</h1>
        <p class="mt-3 mb-1 headtxt">Экспресс-доставка день в день по Москве и MO</p>
        <p class="mt-3 mb-5 headtxt">A также осуществляем выкуп за вас любого вида из указанного магазина</p>

        <div class="p-4 bg-white headerInpDiv">
            <div class="mb-3 position-relative">
                <span class="position-absolute"><i class="material-icons">add_location</i></span>
                <input type="text" class="w-100 p-2" placeholder="Адрес отправки" v-model="takeAddress">
            </div>
            <div class="position-relative">
                <span class="position-absolute"><i class="material-icons">add_location</i></span>
                <input type="text" class="w-100 p-2" placeholder="Адрес доставки" v-model="getAddress">
            </div>
            <div class="d-sm-flex justify-content-between flex-wrap d-block method mt-3">
                <div class="mt-1" :class="[custom === 'first' ? 'selectedMethod' : '']" @click="custom = 'first'">Пешком</div>
                <div class="mt-1" :class="[custom === 'second' ? 'selectedMethod' : '']" @click="custom = 'second'">Автомобилем</div>
                <div class="mt-1" :class="[custom === 'third' ? 'selectedMethod' : '']" @click="custom = 'third'">Грузовиком</div>
            </div>
            <div class="countSum py-2 px-4 text-white text-center mt-3" @click="changeTo(custom)">Рассчитать стоимость</div>
            <p class="text-center foottxt mt-3 mb-0">Заказ без регистрации,<br> оплата по факту доставки</p>
        </div>

        <div class="d-flex flex-wrap justify-content-center mt-5 mb-4 fUL flex-column flex-lg-row">
            <!-- <div class="firstFootItem mx-2"><b>За 3 месяца:</b></div>
            <div class="firstFootItem mx-2">861370 доставок</div>  -->
            <span class="verticalLine mx-1 d-none d-lg-inline-block">|</span>
            <div class="firstFootItem mx-2">Cреднее время подачи курьера 40 минут</div>
            <span class="verticalLine mx-1 d-none d-lg-inline-block">|</span> 
            <!-- <div class="firstFootItem mx-2">65305 активных курьеров</div>  -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'FirstSection',
    data() {
        return {
            custom: (localStorage.custom === undefined ? 'first' : localStorage.custom),
            takeAddress: '',
            getAddress: ''
        }
    },
    methods: {
        changeTo(el){
            this.$emit('changeTo', el)
        }
    },
    watch: {
        custom(updated){
            localStorage.custom = updated;
        },
        takeAddress(updated){
            localStorage.takeAddress = updated;
        },
        getAddress(updated){
            localStorage.getAddress = updated;
        },
    },
    mounted() {
        if (localStorage.custom !== 'undefined') {
            this.custom = localStorage.custom;
            // console.log(localStorage.custom);
        } else localStorage.custom = 'first';
        if (localStorage.takeAddress !== 'undefined') {
            this.takeAddress = localStorage.takeAddress;
        }
        if (localStorage.getAddress !== 'undefined') {
            this.getAddress = localStorage.getAddress;
        }
    },
}
</script>

<style scoped>
div{
    user-select: none;
}
.selectedMethod{
    border: 1px solid #6f64a4 !important;

}
@media screen and (max-width: 756.5px) {
    .headerInpDiv{
        margin: 0 auto;
    }
    .headerTxt, .headtxt{
        text-align: center;
    }
}
.fUL{
    font-size: 17px;
    color: #6f64a4;
}
.firstFootItem{
    text-align: center;
}
.countSum{
    user-select: none;
    cursor: pointer;
    background-color: #f9b21f;
    border-radius: 22px;
    font-size: 16px;
}
.method>div:hover{
    background-color: #ebebf0 !important;
}
.method>div{
    border: 1px solid transparent;
    user-select: none;
    cursor: pointer;
    background-color: #f5f5fa; 
    font-size: 13px;
    padding: 12px; 
    padding-top: 10px;
    border-radius: 20px;
    color: #6f64a4;
}
.headerInpDiv span{
    padding: 7px 3px;
    user-select: none;
    color: #887fba;
}
.headerTxt{
    color: #f9b21f;
    font-weight: bolder;
    line-height: 130%;
    font-size: 45px;
}
.headerInpDiv input{
    padding-left: 27px !important;
}
p.headtxt{
    /* font-weight: bolder; */
    color: #6f64a4;
    font-size: 17.5px;
}
p.foottxt{
    font-size: 13px;
    color: #6f64a4;
}
.headerInpDiv{
    box-shadow: 0 0 15px rgb(221, 221, 221);
    max-width: 370px;
}
@media screen and (max-width: 478px) {
.headerTxt{
    font-size: 33px;
}
}
</style>
