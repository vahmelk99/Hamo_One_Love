<template>
    <div class="app">
        <b-container class="cont">
            <Header @childSwitcher="setSwitcher" :isWeb="isWeb"/>
        </b-container>
        <MainPage :isWeb="isWeb" @childSwitcher="setSwitcher" v-if="switcher === 'MainPage'"/>
        <OrderPage v-else-if="switcher === 'OrderPage'" />
        <TrackDown :isWeb="isWeb" v-else-if="switcher === 'TrackDown'"/>
        <AddModal />
        <Registration/>
        <Client/>
        
        <b-container v-if="isWeb" class="cont">
            <Footer/>
        </b-container>
    </div>
</template>


<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import MainPage from './MainPage.vue'
import OrderPage from './OrderPage.vue'
import TrackDown from './TrackDown.vue'

import AddModal from './components/ModalLayout/AddModal.vue'
import Registration from './components/ModalLayout/Registration.vue'
import Client from './components/ModalLayout/Client.vue'

export default {
    name: 'App',
    data() {
        return {
            switcher: "MainPage",
            isWeb: false
        }
    },
    created() {
        this.isWeb = (this.$route.params.isWeb !== 'kjdfhgvkjsfkvkjfgvkjsgrfjvjdklfkjgvjklsgldfkjgvkjglxmsdkfvmkxsdlfvxmlsdfhnlviusylriuyglsuvyelrnslckerylfynrlxkjylsrkjyn')
    },
    mounted() {
        // localStorage.custom = 'first';
        if (localStorage.switcher) {
            this.switcher = localStorage.switcher;
        }
        document.head.innerHTML = document.head.innerHTML + ('<link rel="shortcut icon" type="image/png" href="../img/logo.png" />');
    },
    watch: {
        switcher(updated){
            localStorage.switcher = updated;
        },
    },
    methods: {
        setSwitcher(el, custom = localStorage.custom){
            this.switcher = el;
            localStorage.custom = custom;
        }
    },
    components: {
        Header,
        Footer,
        TrackDown,
        OrderPage,
        MainPage,
        Client,
        Registration,
        AddModal
    }
}
</script>

<style>
@font-face {
  font-family: 'myFont';
  src: url('../img/Fonts/Swiss 721 BT.ttf');
}
*{
  font-family: 'myFont' sans-serif;
}
</style>
