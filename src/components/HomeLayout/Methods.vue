<template>
    <div class="app mb-5">
        <b-row>
            <b-col md="6" class="first">
                <h3 class="text-center"><b>Способы оплаты</b></h3>
                <p class="text-center ver px-5">Оплачивайте курьерские услуги удобным способом:</p>
                <div class="px-3 fi">
                    <b-row>
                        <b-col sm=6>
                            <img src="../../../img/page1/atm.png">
                            <p>Пластиковой картой</p>
                        </b-col>
                        <b-col sm=6>
                            <img src="../../../img/page1/savings.png">
                            <p>Безналичным переводом</p>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm=6>
                            <img src="../../../img/page1/give.png">
                            <p>Наличными</p>
                        </b-col>
                        <b-col sm=6>
                            <img src="../../../img/page1/Group 30.png">
                            <p>Qiwi-кошельком</p>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm=6>
                            <img src="../../../img/page1/Group 29.png">
                            <p>Яндекс Деньгами</p>
                        </b-col>
                        <b-col sm=6>
                            <img src="../../../img/page1/mail.png">
                            <p>Наложенным платежом</p>
                        </b-col>
                    </b-row>
                </div>
            </b-col>
            <b-col class="sCol">
                <h3 class="text-center"><b>Доставим оптимальным способом</b></h3>
                <p class="text-center px-5 ver">Документы, покупки, техника, мебель, любой груз весом до 1,5 т. A также осуществляем выкуп за вас любого вида из указанного магазина</p>
                <div class="second d-flex justify-content-center flex-wrap text-center">
                    <div class="p-3" @click="changeTo('first')">
                        <div>
                            <img src="../../../img/page1/leader.png">
                        </div>
                        <p>Пешком</p>
                    </div>
                    <div class="p-3" @click="changeTo('second')">
                        <div>
                            <img src="../../../img/page1/car (2).png">
                        </div>
                        <p>Автомобилем</p>
                    </div>
                    <div class="p-3" @click="changeTo('third')">
                        <div>
                            <img src="../../../img/page1/delivery.png">
                        </div>
                        <p>Грузовиком</p>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'Methods',
    methods: {
        changeTo(el){
            window.scrollTo(0,0);
            this.$emit('changeTo', el);
        }
    },
}
</script>

<style scoped>
@media screen and (max-width: 767.5px) {
    .sCol{
        margin-top: 60px;
    }
}
.second p{
    margin: 0;
}
.second img{
    width: 50px;
}
.second>div>div{
    height: 70px;
}
.second>div:nth-child(2)>div>img{
    width: 70px;
}
.second>div:hover{
    box-shadow: 0 0 15px rgb(221, 221, 221);
    cursor: pointer;
}
h3{
    color: #f9b21f;
    font-size: 22px;
}
.fi p{
    font-size: 13px;
    margin-top: 20px;
    padding-left: 50px;
}
.ver{
    font-size: 17px;
}
p{
    color: #6f64a4;
}
.first img{
    margin-top: 17px;
    float: left;
}
</style>