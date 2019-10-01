<template>
    <div class="app">
        <b-container class="cont">
            <div class="par">
                <h2 class="w-100"><b>Установите приложение, и все курьеры будут как на ладони</b></h2>
                <p class="mt-4 mb-5">В любую свободную минуту создавайте новые заказы и следите за выполнением уже созданных.</p>
                <div class="as">
                    <a href="#" class="mr-3"><img src="../../../img/page1/appstore-badge.png" class="appsIcon mb-1" alt=""></a>
                    <a href="#"><img src="../../../img/page1/google-badge.png" class="appsIcon mb-1" alt=""></a>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'AppDiv'
}
</script>

<style scoped>
.appsIcon{
  height: 38px;
  width: auto;
}
.app{
    background-image: url('../../../img/page1/Group 63.png'), linear-gradient(to top, #f4f4f9 91%, white 9%);
    background-repeat: no-repeat;
    background-size: auto 95%;
    background-position: 85% 0;
    margin-top: 70px;
    padding-top: 43px;
}
.par{
    padding: 100px 0px;
}
h2{
    color: #f9b21f;
    max-width: 480px;
}
p{
    max-width: 480px;
    font-size: 18px;
    color: #6f64a4;
}
@media screen and (max-width: 1199.5px) {
.app{
    background-position: 90% 0;
}    
}
@media screen and (max-width: 379px) {
    h2{
        font-size: 25px;
    }
}
@media screen and (max-width: 991.5px) {
.app{
    background-image: url('../../../img/page1/Group 63.png'), linear-gradient(to top, #f4f4f9 100%, white 0%);
    background-position: 100% 38%;
    background-size: auto 50%;
    background-color: #f4f4f9;
}   
.par{
    padding: 50px 0px;
}
p, h2{
    max-width: 350px;
} 
}
@media screen and (max-width: 765px) {
.app{
    background-image: none;
}
h2, p{
    text-align: center;
    max-width: 100%;;
}
.as{
    display: flex;
    justify-content: center;
}
}
</style>
