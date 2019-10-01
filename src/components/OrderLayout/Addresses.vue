<template>
  <div class="mb-4 to position-relative">
    <div class="d-flex flex-wrap pt-3 w-100">
      <div
        class="chooser pb-2 ml-4"
        :class="[address.mosc ? 'selectedChooser' : '']"
        @click="address.mosc = true"
      >
        <b v-if="address.mosc">По Москве и области</b>
        <p v-else>По Москве и области</p>
      </div>
      <div
        class="chooser ml-4 mr-5 pb-2"
        :class="[address.mosc ? '' : 'selectedChooser']"
        @click="address.mosc = false"
      >
        <b v-if="!address.mosc">В регионы</b>
        <p v-else>В регионы</p>
      </div>
      <span
        v-if="last !== 1"
        class="position-absolute xach pr-3"
        @click="$root.$emit('removeAddress', address.id)"
      >&times;</span>
      <div class="leftNums position-absolute h-100">
        <div class="one rounded-circle text-center">{{address.id}}</div>
        <div class="oneLine onLineMin"></div>
      </div>
    </div>
    <div v-if="address.mosc" class="w-100 p-3 mb-4 position-relative">
      <div class="d-flex flex-wrap">
        <img src="../../../img/page5/Group 66.png" alt="map" />
        <input
          class="address flex-fill p-2"
          type="text"
          v-model="address.map"
          placeholder="Покровка, 11"
        />
      </div>
      <div class="d-lg-flex">
        <div>
          <div class="d-inline-block position-relative">
            <span class="position-absolute spanPlus">+7</span>
            <input
              type="text"
              class="py-2 mr-2 pl-4 mt-3"
              placeholder="Телефон"
              :id="'phone' + address.id"
              @keyup="phone_number_mask"
              @keydown="validate_int"
              v-model="address.phone"
            />
          </div>
          <select name="day" class="p-1 mt-3" v-model="address.day">
            <option v-for="(day, ind) in days" :key="ind" :value="day">{{day}}</option>
          </select>
        </div>
        <div class="mt-3 pl-3 flex-fill range d-flex justify-content-between">
          <span class="text-white">{{address.day === 'сегодня' ? startTimeone : '00:00'}}</span>
          <div class="track flex-fill px-3">
            <Slider :minTime="startTimeone" :day="address.day" />
          </div>
          <span class="text-white">23:30</span>
        </div>
      </div>
      <div class="mb-1">
        <textarea
          name="additional"
          class="w-100 additional p-2"
          placeholder="Задача для курьера"
          v-model="address.txtarea"
        ></textarea>
      </div>
      <div v-if="online" class="d-flex flex-wrap">
        <input
          type="text"
          v-model="address.cont"
          class="p-2 mt-2 mr-3"
          placeholder="Контактное лицо"
        />
        <input
          type="text"
          v-model="address.innerNum"
          class="p-2 mt-2"
          placeholder="Внутр. номер заказа"
        />
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
    <div v-else class="position-relative second pt-2">
      <div class="px-3">
        <label :for="'city' + address.id">Город назначения</label>
        <input
          type="text"
          :id="'city' + address.id"
          class="w-100 p-2 mb-3"
          v-model="address.city"
          placeholder="Город"
        />
        <label :for="'size' + address.id">Данные об отправлении</label>
        <b-row>
          <b-col md="3" class="pb-3">
            <span class="input-group-text sizesInp pl-0 py-0 rounded-0">
              <input
                type="number"
                class="border-0 rounded-0 form-control"
                :id="'size' + address.id"
                placeholder="Вес"
                v-model="address.kg"
              />
              <span class="rDet">&nbsp;кг&nbsp;</span>
            </span>
          </b-col>
          <b-col class="d-flex pb-3">
            <span class="input-group-text sizesInp px-0 py-0 d-block d-sm-flex rounded-0">
              <input
                type="number"
                class="border-0 rounded-0 form-control"
                placeholder="Длина"
                v-model="address.length"
              />
              <span class="rDet">&nbsp;см&nbsp;</span>
            </span>
            <span class="px-2 angam">×</span>
            <span class="input-group-text sizesInp px-0 py-0 d-block d-sm-flex rounded-0">
              <input
                type="number"
                class="border-0 rounded-0 form-control"
                placeholder="Ширина"
                v-model="address.width"
              />
              <span class="rDet">&nbsp;см&nbsp;</span>
            </span>
            <span class="px-2 angam">×</span>
            <span class="input-group-text sizesInp px-0 py-0 d-block d-sm-flex rounded-0">
              <input
                type="number"
                class="border-0 rounded-0 form-control"
                placeholder="Высота"
                v-model="address.height"
              />
              <span class="rDet">&nbsp;см&nbsp;</span>
            </span>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";

export default {
  name: "Addresses",
  props: ["address", "last"],
  components: {
    Slider
  },
  data() {
    return {
      online: false,
      days: this.mouther(new Date())
    };
  },
  updated() {
    this.$nextTick(() => {
      this.$emit("dataChange");
    });
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
      var myCaja = document.getElementById("phone" + this.address.id);
      var myText = "";
      var myNumbers = [];
      var myOutPut = "";
      var theLastPos = 1;
      myText = this.address.phone;
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
      this.address.phone = myOutPut;
      document
        .getElementById("phone" + this.address.id)
        .setSelectionRange(theLastPos, theLastPos);
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
    startTimeone() {
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
        first = this.startTimeone;
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

.second,
.rDet {
  color: #62569c;
}
.form-control {
  box-shadow: none !important;
}
.form-control:focus {
  outline: -webkit-focus-ring-color auto 1px !important;
}
.sizesInp > input {
  color: black !important;
}
.sizesInp {
  background-color: white;
}
.angam {
  line-height: 194%;
}
.input-group-text {
  user-select: none;
}
.arrs {
  font-size: 10px;
}
img {
  cursor: pointer;
}
.slider {
  user-select: none;
  font-size: 13px;
  top: -27.5px;
  color: #62569c;
  left: -1px;
  height: 55px;
  width: 55px;
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
input,
select,
option {
  font-size: 13px;
  border: 1px solid #cbc7dd;
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
.to {
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
.xach {
  right: 0;
  font-size: 30px;
  line-height: 80%;
  cursor: pointer;
  user-select: none;
}
.chooser {
  border-bottom: 2px solid transparent;
  user-select: none;
  cursor: pointer;
  color: #62569c;
  font-size: 18px;
  line-height: 30px;
}
.selectedChooser {
  border-bottom: 2px solid #62569c;
}
@media screen and (max-width: 575.5px) {
  .leftNums {
    display: none;
  }
}
@media screen and (min-width: 575.5px) {
  .rDet {
    position: absolute;
    right: 5px;
    top: 3px;
  }
  .sizesInp {
    position: relative;
    padding-right: 17px !important;
  }
}
</style>