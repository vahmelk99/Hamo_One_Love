<template>
    <div>
        <div class="par pt-4 mt-2">
            <h2>Заявка на доставку</h2>        
            <b-row class="choises m-0">
                <b-col 
                    :class="[(first ? 'selectedChois' : 'chois')]" 
                    class="text-center py-2" 
                    @click="changeFirstChois('first')" 
                    md='3'
                >Пешком</b-col>
                <b-col 
                    :class="[(second ? 'selectedChois' : 'chois')]" 
                    class="text-center py-2" 
                    @click="changeFirstChois('second')" 
                    md='6'
                >Легковой&nbsp;автомобиль</b-col>
                <b-col 
                    :class="[(third ? 'selectedChois' : 'chois')]" 
                    class="text-center py-2" 
                    @click="changeFirstChois('third')" 
                    md='3'
                >Грузовой</b-col>
            </b-row>
            <div v-if="first">
                <b-row class="choises m-0">
                    <b-col 
                        :class="[(oneKG ? 'selectedChois' : 'chois')]" 
                        class="text-center py-2" 
                        @click="changeSecondChois('one')" 
                        sm='3'
                    >до 1 кг</b-col>
                    <b-col 
                        :class="[(fiveKG ? 'selectedChois' : 'chois')]" 
                        class="text-center py-2" 
                        @click="changeSecondChois('five')" 
                        sm='3'
                    >до 5 кг</b-col>
                    <b-col 
                        :class="[(tenKG ? 'selectedChois' : 'chois')]" 
                        class="text-center py-2" 
                        @click="changeSecondChois('ten')" 
                        sm='3'
                    >до 10 кг</b-col>
                    <b-col 
                        :class="[(fifteenKG ? 'selectedChois' : 'chois')]" 
                        class="text-center py-2" 
                        @click="changeSecondChois('fifteen')" 
                        sm='3'
                    >до 15 кг</b-col>
                </b-row>
                <p 
                    :class="[(forCurr ? 'diSale' : 'sale')]" 
                    @click="turnOn(1)" 
                    class="d-inline-block"
                >4 часа <b>(скидка -20%)</b></p>
                <div class="position-relative sDiv d-inline-block">
                    <label class="switch">
                        <input v-model="forCurr" class="toggleInp" type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                <p 
                    :class="[(forCurr ? 'sale' : 'diSale')]" 
                    @click="turnOn(0)" 
                    class=" d-inline-block"
                >Точное время</p>
            </div>
            <b-row v-else-if="second" class="choises m-0">
                <b-col 
                    :class="[(fiftyKG ? 'selectedChois' : 'chois')]" 
                    class="text-center py-2" 
                    @click="changeThirdChois('fifty')" 
                    sm='3'
                >до 50 кг</b-col>
                <b-col 
                    :class="[(hundredKG ? 'selectedChois' : 'chois')]" 
                    class="text-center py-2" 
                    @click="changeThirdChois('hundred')" 
                    sm='3'
                >до 100 кг</b-col>
                <b-col 
                    :class="[(hundredFiftyKG ? 'selectedChois' : 'chois')]" 
                    class="text-center py-2" 
                    @click="changeThirdChois('hundredFifty')" 
                    sm='3'
                >до 150 кг</b-col>
                <b-col 
                    :class="[(twoHundredKG ? 'selectedChois' : 'chois')]" 
                    class="text-center py-2" 
                    @click="changeThirdChois('twoHundred')" 
                    sm='3'
                >до 200 кг</b-col>
            </b-row>
            <div v-else>
                <b-row class="autos m-0">
                    <b-col 
                        :class="[(fiftyKG ? 'selectedChois' : 'chois')]" 
                        class="py-2" 
                        @click="changeThirdChois('fifty')" 
                        md='3'
                    >
                        <!-- <img src="../../../img/page5/Group 58.png" alt="Джип/Пикап"> -->
                        <p>Джип/Пикап<br>до&nbsp;2&nbsp;м3,&nbsp;500&nbsp;кг</p>
                    </b-col>
                    <b-col 
                        :class="[(hundredKG ? 'selectedChois' : 'chois')]" 
                        class="py-2" 
                        @click="changeThirdChois('hundred')" 
                        md='3'
                    >
                        <!-- <img src="../../../img/page5/Group 58.png" alt="Каблук"> -->
                        <p>Каблук<br>до&nbsp;3,2&nbsp;м3,&nbsp;700&nbsp;кг</p>
                    </b-col>
                    <b-col 
                        :class="[(hundredFiftyKG ? 'selectedChois' : 'chois')]" 
                        class="py-2" 
                        @click="changeThirdChois('hundredFifty')" 
                        md='3'
                    >
                        <!-- <img src="../../../img/page5/Group 58.png" alt="Портер"> -->
                        <p>Портер<br>до&nbsp;8&nbsp;м3,&nbsp;1000&nbsp;кг</p>
                    </b-col>
                    <b-col 
                        :class="[(twoHundredKG ? 'selectedChois' : 'chois')]" 
                        class="py-2" 
                        @click="changeThirdChois('twoHundred')" 
                        md='3'
                    >
                        <!-- <img src="../../../img/page5/Group 58.png" alt="Газель"> -->
                        <p>Газель<br>до&nbsp;17&nbsp;м3,&nbsp;1500&nbsp;кг</p>
                    </b-col>
                </b-row>
            </div>
            <div class="py-1 hint">
                <p>Начните вводить название улицы<br>выберите адрес из выпадающего списка</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MethodDelivery',
    data() {
        return {
            first: true,
            second: false,
            third: false,
            oneKG: true,
            fiveKG: false,
            tenKG: false,
            fifteenKG: false,
            fiftyKG: true,
            hundredKG: false,
            hundredFiftyKG: false,
            twoHundredKG: false,
            forCurr: false,
        }
    },
    methods: {
        changeFirstChois(el){
            switch (el) {
                case 'first':
                    this.first = true;
                    this.second = false;
                    break;
                case 'second':
                    this.first = false;
                    this.second = true;
                    break;
                default:
                    this.first = false;
                    this.second = false;
                    break;
            }
            this.third = !(this.first || this.second)
            localStorage.custom = el;
        },
        changeSecondChois(el){
            switch (el) {
                case 'one':
                    this.oneKG = true;
                    this.fiveKG = false;
                    this.tenKG = false;
                    break;
                case 'five':
                    this.oneKG = false;
                    this.fiveKG = true;
                    this.tenKG = false;
                    break;
                case 'ten':
                    this.oneKG = false;
                    this.fiveKG = false;
                    this.tenKG = true;
                    break;
                default:
                    this.oneKG = false;
                    this.fiveKG = false;
                    this.tenKG = false;
                    break;
            }
            this.fifteenKG = !(this.oneKG || this. fiveKG || this.tenKG)
        },
        changeThirdChois(el){
            switch (el) {
                case 'fifty':
                    this.fiftyKG = true;
                    this.hundredKG = false;
                    this.hundredFiftyKG = false;
                    break;
                case 'hundred':
                    this.fiftyKG = false;
                    this.hundredKG = true;
                    this.hundredFiftyKG = false;
                    break;
                case 'hundredFifty':
                    this.fiftyKG = false;
                    this.hundredKG = false;
                    this.hundredFiftyKG = true;
                    break;
                default:
                    this.fiftyKG = false;
                    this.hundredKG = false;
                    this.hundredFiftyKG = false;
                    break;
            }
            this.twoHundredKG = !(this.fiftyKG || this. hundredKG || this.hundredFiftyKG)
        },
        turnOn(sale){
            this.forCurr = (sale ? false : true);  
        }
    },
    mounted() {
        if(localStorage.custom !== 'undefined'){
            this.first = this.second = this.third = false;
            let custom = localStorage.getItem('custom');
            // console.log(custom);
            custom === 'first' ? this.first = true : (custom === 'second' ? this.second = true : this.third = true);
        }
        if (localStorage.forCurr !== 'undefined') {
            this.forCurr = eval(localStorage.forCurr);
        }
    },
    watch: {
        forCurr(updated){
            localStorage.forCurr = updated;
        },
    },
}
</script>

<style scoped>
div{
    user-select: none;
}
.autos div{
    display: flex;
    justify-content: center;
}
.autos{
    font-size: 11px;
    max-width: 689px;
}
.autos img{
    width: 35px;
    height: 35px;
    margin-right: 7px;
}
.autos p{
    display: inline-block;
    margin: 0;
}
h2{
    color: #f9b21f;
}
.par{
    background-image: url('../../../img/page5/Group 47.png');
    background-repeat: no-repeat;
    background-size: 370px;
    background-position-x: 100%;
}
.choises{
    max-width: 480px;
    margin: 20px 0 !important;
}
.choises>*, .autos>*{
    border: 1px solid #8f87b9;
}
.choises>*:hover, .autos>*:hover{
    cursor: pointer;
}
.chois{
    background-color: #bfbad6;
    color: white;
}
.chois:hover{
    background-color: #a7a2bd;
}
.selectedChois{
    background-color: white;
    color: #594e96;
}
.hint{
    color: #594e96;
}
.sale{
    font-size: 18px;
    color: #524693;
    user-select: none;
}
.diSale{
    font-size: 16px;
    color: #c1bcd7;
    cursor: pointer;
}
.switch {
  position: relative;
  display: inline-block;
  width: 20px;
  top: 9.5px;
  left: 5px;
  right: 5px;
  height: 8px;
}

.switch .toggleInp { 
  opacity: 0;
  width: 0;
  height: 0;
}
.sDiv{
    width: 30px;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #bfbad6;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  top: -1.5px;
  height: 11px;
  width: 11px;
  left: 0px;
  background-color: #f9b21f;
  border: 2px solid white;
  box-shadow: 1px 0px #bfbad6, 0px 1px #bfbad6, 0px -1px #bfbad6, -1px 0px #bfbad6,.7px .7px #bfbad6, .7px -.7px #bfbad6, -.7px .7px #bfbad6, -.7px -.7px #bfbad6;
  transition: .4s;
}

.toggleInp:checked + .slider {
  background-color: #423588;
}

.toggleInp:checked + .slider:before {
  transform: translateX(12px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
@media screen and (max-width: 991.5px){
    .par{
        background-image: none;
    }
}
@media screen and (max-width: 1199.5px){
    .par{
        background-size: 300px;
    }
}
</style>