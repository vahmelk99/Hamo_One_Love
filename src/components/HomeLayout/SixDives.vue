<template>
    <div>
        <b-container class="d-flex justify-content-center cont mb-5">
            <h2 class="text-center"><b class="w-100 text-center">POSILOCHKI — это революция на рынке срочной курьерской доставки</b></h2>
        </b-container>
        <div class="par d-flex justify-content-center flex-wrap px-5 mb-5">
            <div>
                <img src="../../../img/page1/Group 18.png">
                <p>Мгновенно рассчитаем стоимость доставки в форме заказа.</p>
            </div>
            <div>
                <img src="../../../img/page1/Group 19.png">
                <p>За 7 минут назначим на заказ ближайшего курьера с самым высоким рейтингом.</p>
            </div>
            <div>
                <img src="../../../img/page1/Group 23.png">
                <p>Оформить заказ на курьерскую или грузовую доставку можно без регистрации и договора.</p>
            </div>
            <div>
                <img src="../../../img/page1/Group 22.png">
                <p>Маршрут по доставке можно менять на ходу. Все изменения мгновенно отображаются у курьера.</p>
            </div>
            <div>
                <img src="../../../img/page1/Group 21.png">
                <p>Оплачивать доставку можно на любом из адресов, по безналу или на Qiwi-кошелек курьеру.</p>
            </div>
            <div>
                <img src="../../../img/page1/Group 18.png">
                <p>SMS уведомления на каждом адресе по мере выполнения заказа.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.par div{
    width: 220px;
    margin: 10px;
}
.par p{
    font-size: 12px;
    padding-left: 70px;
    color: #6f64a4;

}
.par{
    margin: 0 auto;
    max-width: 820px;;
}
.par img{
    margin-right: 20px;
    float: left;
    width: 50px;
    height: 50px;
}
h2{
    color: #f9b21f;
    max-width: 600px;;
}
@media screen and (max-width: 468.5px) {
    h2{
        font-size: 25px;
    }
}
@media screen and (max-width: 585px) {
    .par div{
        width: 100%;
    }
}
</style>
