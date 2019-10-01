<template>
  <div class="mb-4">
    <div class="w-100 p-3 mb-4 from position-relative">
      <div class="leftNums position-absolute h-100">
        <div class="one rounded-circle text-center">1</div>
        <div class="oneLine onLineMin"></div>
      </div>
      <div class="d-flex mb-3 flex-wrap">
        <img src="../../../img/page5/Group 66.png" alt="map" />
        <input
          class="address flex-fill p-2"
          type="text"
          placeholder="Покровка, 11"
          v-model="address0"
        />
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" v-model="gruzchik0" id="gruzchik" />
        <label class="form-check-label purple" for="gruzchik">Hужен грузчик</label>
      </div>
      <div class="form-check mt-1">
        <input type="checkbox" class="form-check-input" v-model="webuy" id="webuy" />
        <label class="form-check-label purple" for="webuy">Выкуп</label>
      </div>
      <div v-if="!webuy">
        <div class="d-lg-flex">
          <div>
            <div class="d-inline-block position-relative">
              <span class="position-absolute spanPlus">+7</span>
              <input
                type="text"
                class="py-2 mr-2 pl-4 mt-3"
                placeholder="Телефон"
                id="phone0"
                @keyup="phone_number_mask"
                @keydown="validate_int"
                v-model="phone0"
              />
            </div>
            <select name="day" class="p-1 mt-3" v-model="selectedDay0">
              <option v-for="(day, ind) in days" :key="ind" :value="day">{{day}}</option>
            </select>
          </div>
          <div class="mt-3 pl-3 flex-fill range d-flex justify-content-between">
            <span class="text-white">{{selectedDay0 === 'сегодня' ? startTime : '00:00'}}</span>
            <div class="track flex-fill px-3">
              <Slider :minTime="startTime" :day="selectedDay0" />
            </div>
            <span class="text-white">23:30</span>
          </div>
        </div>
        <div class="mb-1">
          <textarea
            name="additional"
            class="w-100 additional p-2"
            placeholder="Задача для курьера"
            v-model="additional0"
          ></textarea>
        </div>
      </div>
      <div v-else>
        <label for="marketName" class="purple mt-2">Имя магазина</label>
        <input
          type="text"
          id="marketName"
          class="w-100 p-2 mb-3"
          v-model="marketName"
          placeholder="Mагазина"
        />
        <div class="mt-1 d-flex flex-wrap">
          <div class="flex-fill proName">
            <label for="itemName" class="purple">Имя товара</label>
            <input
              type="text"
              id="itemName"
              class="w-100 p-2 mb-3"
              v-model="itemName"
              placeholder="Товара"
            />
          </div>
          <div class="flex-fill">
            <label for="itemCount" class="purple">Количество товара</label>
            <input
              type="number"
              id="itemCount"
              class="w-100 p-2 mb-3"
              v-model="itemCount"
              placeholder="Количество"
            />
          </div>
        </div>
      </div>
      <div v-if="online" class="d-flex flex-wrap">
        <input type="text" class="p-2 mt-2 mr-3" placeholder="Контактное лицо" v-model="contanc0" />
        <input type="text" class="p-2 mt-2" placeholder="Внутр. номер заказа" v-model="num0" />
      </div>
      <div class="mt-2">
        <p v-if="online" class="iShop" @click="online = false">
          Скрыть поля для интернет магазина
          <span class="arrs">▲</span>
        </p>
        <p v-else class="iShop" @click="online = true">
          Для интернет магазина (не обязательно)
          <span class="arrs">▼</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";

export default {
  name: "DetailsDelivery",
  components: {
    Slider
  },
  data() {
    return {
      online: false,
      days: this.mouther(new Date()),
      selectedDay0: "сегодня",
      additional0: "",
      phone0: "",
      address0: "",
      num0: "",
      contanc0: "",
      gruzchik0: false,
      webuy: true,
      marketName: "",
      itemCount: "",
      itemName: ""
    };
  },
  mounted() {
    if (localStorage.additional0 !== "undefined") {
      this.additional0 = localStorage.additional0;
    }
    if (localStorage.phone0 !== "undefined") {
      this.phone0 = localStorage.phone0;
    }
    if (localStorage.takeAddress !== "undefined") {
      this.address0 = localStorage.takeAddress;
    }
    if (localStorage.num0 !== "undefined") {
      this.num0 = localStorage.num0;
    }
    if (localStorage.contanc0 !== "undefined") {
      this.contanc0 = localStorage.contanc0;
    }
    if (localStorage.selectedDay0) {
      this.selectedDay0 = localStorage.selectedDay0;
    }
    if (localStorage.gruzchik0) {
      this.gruzchik0 = localStorage.gruzchik0;
    }
    if (localStorage.itemCount) {
      this.itemCount = localStorage.itemCount;
    }
    if (localStorage.itemName) {
      this.itemName = localStorage.itemName;
    }
  },
  watch: {
    additional0(updated) {
      localStorage.additional0 = updated;
    },
    phone0(updated) {
      localStorage.phone0 = updated;
    },
    address0(updated) {
      localStorage.takeAddress = updated;
    },
    num0(updated) {
      localStorage.num0 = updated;
    },
    contanc0(updated) {
      localStorage.contanc0 = updated;
    },
    itemName(updated) {
      localStorage.itemName = updated;
    },
        itemCount(updated) {
      localStorage.itemCount = updated;
    },
    gruzchik0(updated) {
      localStorage.gruzchik0 = updated;
    },
    selectedDay0(updated) {
      localStorage.selectedDay0 = updated;
    }
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
      var myCaja = document.getElementById("phone0");
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
      document.getElementById("phone0").value = myOutPut;
      document
        .getElementById("phone0")
        .setSelectionRange(theLastPos, theLastPos);
      this.phone0 = myOutPut;
    },
    mouther(d) {
      let arr = ["сегодня", "завтра"];
      d.setDate(d.getDate() + 1);
      for (let i = 3; i < 15; i++) {
        d.setDate(d.getDate() + 1);
        let m = d.getMonth();
        let mouth = "";
        switch (m) {
          case 1:
            mouth = "февраль";
            break;
          case 2:
            mouth = "март";
            break;
          case 3:
            mouth = "апрель";
            break;
          case 4:
            mouth = "май";
            break;
          case 5:
            mouth = "июнь";
            break;
          case 6:
            mouth = "июль";
            break;
          case 7:
            mouth = "август";
            break;
          case 8:
            mouth = "сентябрь";
            break;
          case 9:
            mouth = "октябрь";
            break;
          case 10:
            mouth = "ноябрь";
            break;
          case 11:
            mouth = "декабрь";
            break;
          default:
            mouth = "январь";
            break;
        }

        arr[i - 1] =
          d.getDate() < 10
            ? `0${d.getDate()} ${mouth}`
            : `${d.getDate()} ${mouth}`;
      }
      return arr;
    }
  },
  computed: {
    startTime() {
      let date = new Date(),
        m = date.getMinutes();
      if (m > 29) {
        date.setHours(date.getHours() + 1);
        m = 0;
      } else {
        m = 30;
      }
      if (m < 10) m = "0" + m;
      let h = date.getHours();
      return `${h}:${m}`;
    },
    interval() {
      let date = new Date(),
        first = this.startTime;
      date.setHours(date.getHours() + 3); //3 hours interval
      let second = date.getHours() + ":" + first.substr(3);
      return `${first}-\n${second}`;
    }
  }
};
</script>

<style scoped>
div {
  user-select: none;
}
.arrs {
  font-size: 10px;
}
img {
  cursor: pointer;
}
.trackOne {
  height: 3px;
  margin-top: 20px;
  border: 0.5px solid #62569c;
  background-color: #62569c;
}
.range span {
  line-height: 41px;
  font-size: 13px;
}
.number {
  width: 145px;
}
select {
  border: 1px solid #cbc7dd;
  color: #bfbad6;
  height: 37px;
}
option {
  color: black;
}
.iShop {
  cursor: pointer;
}
p {
  margin: 0;
  color: #62569c;
}
.from {
  background-color: #bfbad6;
}
.additional {
  font-size: 13px;
  resize: none;
  height: 65px;
  border: 1px solid #cbc7dd;
}
.leftNums {
  left: -40px;
  top: 0;
}
.one {
  width: 25px;
  height: 25px;
  color: #62569c;
  border: 1px solid #62569c;
}
.purple {
  color: #62569c;
}
.address {
  height: 40px;
  font-size: 13px;
}
img {
  width: 40px;
  height: 40px;
}
.oneLine {
  width: 1px;
  border-right: 1px solid #62569c;
  margin-top: 12px;
  margin-left: 12px;
  height: 88.5%;
}
@media screen and (max-width: 575.5px) {
  .leftNums {
    display: none;
  }
}

@media screen and (min-width: 767.5px) {
  .proName {
    padding-right: 30px;
  }
}
</style>