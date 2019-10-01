<template>
    <b-navbar toggleable="lg" type="light" variant="white" class="px-0 par">

        <b-navbar-toggle class="toggle solid" id="tog" target="nav-collapse" @click="toggleBtn">
            <div class="container" id="cont">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </b-navbar-toggle>
        
        <b-navbar-brand @click="changeSwitcher('MainPage')" class="logo">
            <img src="img/Group 61.png" alt="">
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="d-flex justify-content-between drop w-100 ml-auto">
                <b-row>
                    <b-col sm='6' class="cols"><a @click="$bvModal.show('bv-modal-client')">Стать&nbsp;клиентом</a></b-col>          <!-- xs -->
                    <b-col sm='6' class="cols"><a @click="changeSwitcher('TrackDown')">Отследить&nbsp;заказ</a></b-col>
                </b-row>
                <b-row v-if="isWeb">
                    <b-col sm='6' @click="changeSwitcher('OrderPage')" class="cols"><b-button pill class="px-4 bg-white but mb-3 btn1 mr-2">Заполнить&nbsp;заявку</b-button></b-col>
                    <b-col sm='6' class="cols"><b-button pill class="px-4 but mb-3 btn2" @click="$bvModal.show('bv-modal-example')">Вход&nbsp;/&nbsp;Регистрация</b-button></b-col>
                </b-row>
                <b-row v-else>
                    <b-col sm='6' @click="changeSwitcher('OrderPage')"  class="cols"><a>Заполнить&nbsp;заявку</a></b-col> 
                    <b-col sm='6' @click="$bvModal.show('bv-modal-example')"  class="cols"><a>Вход&nbsp;/&nbsp;Регистрация</a></b-col>
                </b-row>

            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: 'Header', 
    props: {
        switcher: String,
        isWeb: Boolean
    },
    methods: {
        toggleBtn(){
            document.getElementById('cont').classList.toggle("change");
            document.getElementById('tog').classList.toggle("dashed");
            document.getElementById('tog').classList.toggle("solid");
        },
        changeSwitcher(to){
            this.$emit('childSwitcher', to);
        }
    }

}
window.addEventListener('resize', function () {
    if(window.innerWidth > 991.5){
        document.getElementById('cont').classList.remove("change");
        document.getElementById('tog').classList.add("solid");
        document.getElementById('nav-collapse').classList.remove("show");
        document.getElementById('tog').classList.remove("dashed");
    }
})
</script>

<style scoped>

.cols{
    padding: 0 5px !important;
    font-size: 15px;
}
.btn1{
    color: #4d408f;
    border: 1px solid #423588 !important;
}
.btn1:hover{
    background-color: #423588 !important;
    color: white;
}
.btn1:active, .btn2:active{
    background-color: #423588 !important;
    outline: #3d327c !important;
}
.btn2{
    background-color: #423588;
    border: 1px solid #423588 !important;

}
.btn2:hover{
    background-color: #3d327c;
}
.container {
  display: inline-block;
  cursor: pointer;
}
.dashed{
    border-style: dashed !important;
}
.solid{
    border-style: solid !important;
}
.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #4d408f;
  margin: 6px 0;
  transition: 0.4s;
}
.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}
.change .bar2 {opacity: 0;}
.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
button{
    margin: 0 !important;
}
#nav-collapse, #nav-collapse *{
    font-size: 15px !important;
}
a{
    user-select: none;
    cursor: pointer;
    color: #4d408f !important;
    line-height: 38px;
}
a:hover{
    text-decoration: underline !important;
    color: #4d408f;
}
.drop{
    max-width: 687px;
}
ul{
    margin: 0;
}
.toggle{
    border-width: 1px;
    border-color: #4d408f !important;
    outline: none !important; 
}
.par{
    background-color: transparent !important;
}
img{
    user-select: none;
    width: 198px;
}
.logo{
    cursor: pointer;
}
@media screen and (max-width: 991.5px){
    img{
        width: 45vw;
        max-width: 198px;
    }
    .logo{
        margin-left: 20px;
    }
    .drop{
        margin: 0 !important;
        max-width: 400px;
        padding-left: 10px;
    }
    .par{
        display: flex !important;
        justify-content: flex-start;
    }
    .btn1, .btn2{
        margin: 10px 0 !important;
    }
}
@media screen and (max-width: 1199px) and (min-width: 991px){
    .but{
        padding-left: 0.5rem !important;
        padding-right: 0.5rem !important;
    }
}
</style>