<template>
    <div class="app">
        <div class="whi">
            <div class="par pb-5">
                <h2 class="my-4"><b>Отслеживание заказа</b></h2>
                <p class="mb-4">Похоже, вы ожидаете доставку. Введите номер своего заказа и телефон. Вы увидите своего курьера на карте, когда он отправится к вам.</p>
                <div class="inpDivs d-flex justify-content-between flex-wrap">
                    <input type="text" class="p-2 mt-3 py-2" placeholder="Заказ" id="zakaz"
                    v-model="orderNum">
                    <div class="d-inline-block position-relative">
                        <span class="position-absolute spanPlus">+7</span>
                        <input type="text" class="py-2 pr-2 pl-4 mt-3" placeholder="Телефон" id="phone" @keyup="phone_number_mask" @keydown="validate_int" v-model="trackPhone">
                    </div>
                    <div>
                        <div class="addAddressBtn mt-3 py-2 px-5 text-white text-center">Найти</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TrackInp',
    data() {
        return {
            trackPhone: '',
            orderNum: ''
        }
    },
    mounted() {
        if (localStorage.trackPhone !== 'undefined') {
            this.trackPhone = localStorage.trackPhone;
        }
        if (localStorage.orderNum !== 'undefined') {
            this.orderNum = localStorage.orderNum;
        }
    },
    watch: {
        orderNum(updated){
            localStorage.orderNum = updated;
        },
        trackPhone(updated){
            localStorage.trackPhone = updated;
        },
    },
    methods: {
        
        validate_int(myEvento) {
            let dato = false;
            if ((myEvento.charCode >= 48 && myEvento.charCode <= 57) || myEvento.keyCode == 9 || myEvento.keyCode == 10 || myEvento.keyCode == 13 || myEvento.keyCode == 8 || myEvento.keyCode == 116 || myEvento.keyCode == 46 || (myEvento.keyCode <= 40 && myEvento.keyCode >= 37)) {
                dato = true;
            }
            return dato;
        },

        phone_number_mask() {
            var myMask = "(___) ___-____";
            var myCaja = document.getElementById("phone");
            var myText = "";
            var myNumbers = [];
            var myOutPut = ""
            var theLastPos = 1;
            myText = myCaja.value;
            //get numbers
            for (var i = 0; i < myText.length; i++) {
                if (!isNaN(myText.charAt(i)) && myText.charAt(i) != " ") {
                    myNumbers.push(myText.charAt(i));
                }
            }
            //write over mask
            for (var j = 0; j < myMask.length; j++) {
                if (myMask.charAt(j) == "_") { //replace "_" by a number 
                if (myNumbers.length == 0)
                    myOutPut = myOutPut + myMask.charAt(j);
                else {
                    myOutPut = myOutPut + myNumbers.shift();
                    theLastPos = j + 1; //set caret position
                }
                } else {
                    myOutPut = myOutPut + myMask.charAt(j);
                }
            }
            this.trackPhone = myOutPut;
            document.getElementById("phone").value = myOutPut;
            document.getElementById("phone").setSelectionRange(theLastPos, theLastPos);
        }
    }  
}
</script>

<style scoped>
input#zakaz{
    padding-right: 24.2px !important;
}
.app{
    background-image: url('../../../img/page3/Group 65.png');
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: 100% 0;
}
@media screen and (max-width: 419.5px) {
    .app{
    background-image: none;
}
}
@media screen and (max-width: 991.5px) {
.whi{
    background-color: #ffffffe3;
}   
}
@media screen and (max-width: 767.5px) {
.inpDivs{
    display: block !important;
}
.inpDivs>input{
    margin-right: 30px;
}
.inpDivs>div{
    /* margin-top: 20px; */
    max-width: 157px;
}
}
h2{
    color: #f9b21f;
}
.par{
    max-width: 550px;
    color: #423588;
}
.addAddressBtn{
    user-select: none;
    cursor: pointer;
    background-color: #f9b21f;
    border-radius: 22px;
    font-size: 16px;
}
</style>
