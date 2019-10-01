<template>
    <div class="app">
        <div class="firstCon">
            <b-container class="cont">
                <FirstSection @changeTo="changeTo"/>
            </b-container>
        </div>
        <div v-if="isWeb">
            <b-container class="cont">
                <VideoSection/>
            </b-container>
            <AppDiv/>
            <!-- <b-container class="cont mb-5 pb-4">
                <AboutUs/>
            </b-container>
            <hr class="py-4 mb-0"> -->
        </div>
        <SixDives v-if="isWeb" class="mt-4"/>
        <b-container class="cont">
            <Methods @changeTo="changeTo"/>
        </b-container>
        <SixDives v-if="!isWeb" class="mt-2"/>
        <b-container v-if="!isWeb" class="cont mb-5 pb-4">
            <AboutUs/>
        </b-container>
        <Ending v-if="isWeb"/>
    </div>
</template>

<script>
import FirstSection from './components/HomeLayout/FirstSection.vue'
import VideoSection from './components/HomeLayout/VideoSection.vue'
import AppDiv from './components/HomeLayout/AppDiv.vue'
import AboutUs from './components/HomeLayout/AboutUs.vue'
import SixDives from './components/HomeLayout/SixDives.vue'
import Methods from './components/HomeLayout/Methods.vue'
import Ending from './components/HomeLayout/Ending.vue'

export default {
    name: 'First',
    props: {
        isWeb: Boolean
    },
    components: {
        FirstSection,
        VideoSection,
        AppDiv,
        AboutUs,
        SixDives,
        Methods,
        Ending
    },
    methods: {
        changeTo(that){
            // console.log(that)
            this.$emit('childSwitcher', 'OrderPage', that)
        }
    },
}
</script>

<style scoped>
hr{
    width: 80%;
}
.firstCon{
    background-image: url('../img/page1/Group 62.png') !important;
    background-repeat: no-repeat;
    background-size: 100% 848px;
    background-position: 15px -133px;
}
@media screen and (max-width: 991.5px) {
.firstCon{
    /* background-image: none !important; */
    background-size: 100% 700px;
    background-position: 3px 20px;
} 
}
@media screen and (max-width: 756px) {
.firstCon{
    background-image: none !important;
} 
}
@font-face {
  font-family: 'myFont';
  src: url('../img/Fonts/Swiss 721 BT.ttf');
}
.app *{
  font-family: 'myFont' sans-serif;
}
input::placeholder, textarea::placeholder{
    color: #646464;
}
</style>

<style>
.cont{
  padding: 0 5.2vw;
}
    input, select, option{
        font-size: 13px;
        border: 1px solid #cbc7dd;
    }
</style>