<template>
  <b-modal
    id="bv-modal-client"
    class="rounded-0 position-relative"
    centered
    hide-footer
    hide-header
  >
    <span class="position-absolute p-2" @click="$bvModal.hide('bv-modal-client')">&times;</span>
    <h4 class="text-center mt-2">
      <b>Хотите стать нашим клиентом?</b>
    </h4>
    <div class="d-flex justify-content-center">
      <img src="img/2512905.png" />
    </div>
    <p
      class="firstP text-center mt-2"
    >Оставьте ваш телефон. Мы перезвоним вам в течение дня с понедельника по пятницу.</p>
    <div class="d-inline-block position-relative w-100">
      <span class="position-absolute spanPlus">+7</span>
      <input
        type="text"
        class="py-2 mr-2 pl-4 mt-3 w-100"
        placeholder="Телефон"
        id="phoneReg"
        @keyup="phone_number_mask"
        @keydown="validate_int"
        v-model="clientNum"
      />
    </div>
    <div class="countSum w-100 py-2 px-4 text-white text-center mt-3">Отправить</div>
    <p
      class="firstP text-center mt-2"
    >По вопросам редактирования, отмены заказа или при наличии проблемы</p>
    <div class="d-flex justify-content-center last">
      <img src="../../../img/page2/Group 37.png" />
      <a>Начать чат</a>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "Client",
  data() {
    return {
      clientNum: ""
    };
  },
  methods: {
    validate_int(myEvento) {
      let dato = false;
      if (
        (myEvento.charCode >= 48 && myEvento.charCode <= 57) ||
        myEvento.keyCode == 9 ||
        myEvento.keyCode == 10 ||
        myEvento.keyCode == 13 ||
        myEvento.keyCode == 8 ||
        myEvento.keyCode == 116 ||
        myEvento.keyCode == 46 ||
        (myEvento.keyCode <= 40 && myEvento.keyCode >= 37)
      ) {
        dato = true;
      }
      return dato;
    },

    phone_number_mask() {
      var myMask = "(___) ___-____";
      var myCaja = document.getElementById("phoneReg");
      var myText = "";
      var myNumbers = [];
      var myOutPut = "";
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
        if (myMask.charAt(j) == "_") {
          //replace "_" by a number
          if (myNumbers.length == 0) myOutPut = myOutPut + myMask.charAt(j);
          else {
            myOutPut = myOutPut + myNumbers.shift();
            theLastPos = j + 1; //set caret position
          }
        } else {
          myOutPut = myOutPut + myMask.charAt(j);
        }
      }
      document.getElementById("phoneReg").value = myOutPut;
      document
        .getElementById("phoneReg")
        .setSelectionRange(theLastPos, theLastPos);
    }
  },
  mounted() {
    if (localStorage.clientNum !== "undefined") {
      this.clientNum = localStorage.clientNum;
    }
  },
  watch: {
    clientNum(updated) {
      localStorage.clientNum = updated;
    }
  }
};
</script>

<style scoped>
.last img {
  width: 20px !important;
  cursor: pointer;
}
.last a {
  padding-left: 5px;
  user-select: none;
  cursor: pointer;
  font-size: 10px;
  color: #62569c;
}
.last a:hover {
  text-decoration: underline !important;
  color: #4d408f;
}
h4 {
  font-size: 14px;
  color: #62569c;
}
img {
  width: 150px !important;
}
.firstP {
  color: #62569c;
  font-size: 11px;
  line-height: 190%;
}
.countSum {
  user-select: none;
  cursor: pointer;
  background-color: #f9b21f;
  border-radius: 22px;
  font-size: 16px;
}
</style>