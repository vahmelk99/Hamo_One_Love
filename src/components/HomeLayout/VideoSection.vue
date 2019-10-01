<template>
    <div class="app mb-5">
        <h2 class="text-center vernagir mb-4"><b>Как это работает</b></h2>
        <div class="d-flex justify-content-center pt-1 mb-4">
            <iframe src="https://www.youtube.com/embed/H1ghsyfQ5gc" class="w-100 border-0" allowfullscreen></iframe>
        </div>
        <div class="d-flex justify-content-center par">
            <div class="d-flex justify-content-between flex-column flex-lg-row second w-100">
                <div class="mx-1 mt-3">
                    <div class="firstSec d-flex justify-content-center mb-3">
                        <img src="../../../img/page1/hourglass.png" alt="hourglass">
                        <p class="pl-3 pt-2 d-inline-block"><b>90&nbsp;мин</b></p>
                    </div>
                    <p>Доставка от двери до двери за 90 минут или в удобное время</p>
                </div>
                <div class="mx-1 mt-3">
                    <div class="firstSec d-flex justify-content-center mb-3">
                        <img src="../../../img/page1/wallet (1).png" alt="wallet">
                        <p class="pl-3 pt-2 d-inline-block"><b>от&nbsp;199&nbsp;₽</b></p>
                    </div>
                    <p>Цена доставки в зависимости от сложности маршрута</p>
                </div>
                <div class="mx-1 mt-3">
                    <div class="firstSec d-flex justify-content-center mb-3">
                        <img src="../../../img/page1/Group 7.png" alt="%">
                        <p class="pl-3 pt-2 d-inline-block"><b>100%</b></p>
                    </div>
                    <p>100% компенсация утери или повреждения за 0.5% от ценности отправления</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.par{
    padding: 0 140px;
}
.second>div{
    padding: 20px 20px;
    box-shadow: 0 0 15px rgb(221, 221, 221);
    border: 1px solid #f8f8f8;  
    width: 300px;
}
.firstSec+p{
    font-size: 13px;
    margin: 0;
    text-align: center;
}
.firstSec img{
    width: 40px;
    height: 45px;
}
.vernagir{
    color: #f9b21f;
}
.firstSec{
    max-width: 700px;
}
iframe{
    max-width: 700px;
    height: 393px;
}
.app{
    color: #6f64a4;
}
@media screen and (max-width: 991.5px) {
.par{
    padding: 0;    
} 
.second>div{
    width: 100%;
}
}
@media screen and (max-width: 444px) {
iframe{
    height: 200px;
}
}
</style>
