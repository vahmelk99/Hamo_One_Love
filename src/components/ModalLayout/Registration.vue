<template>
  <b-modal
    id="bv-modal-example"
    class="rounded-0 position-relative"
    centered
    hide-footer
    hide-header
  >
    <span class="position-absolute p-2" @click="$bvModal.hide('bv-modal-example')">&times;</span>
    <div class="d-flex justify-content-center">
      <img src="../../../img/page4/25497 [преобразованный].png" />
    </div>
    <div>
      <div class="w-100">
        <input
          type="text"
          class="w-100 p-2 mt-3"
          :class="{'error': nameError}"
          v-model="renName"
          placeholder="Имя"
        />
        <input
          type="text"
          class="w-100 p-2 mt-3"
          :class="{'error': sNameError}"
          v-model="renSname"
          placeholder="Фамилия"
        />
        <input
          type="text"
          class="p-2 w-100 mt-3"
          :class="{'error': usernameError}"
          v-model="regUsername"
          placeholder="Имя пользователя"
        />
        <input
          type="email"
          class="w-100 p-2 mt-3"
          :class="{'error': emailError}"
          v-model="regMail"
          placeholder="Эл почта"
        />
      </div>
      <div class="d-inline-block position-relative w-100 mb-2">
        <span class="position-absolute spanPlus">+7</span>
        <input
          :class="{'error': numberError}"
          type="text"
          class="py-2 mr-2 pl-4 mt-3 w-100"
          placeholder="Телефон"
          id="phoneReg"
          @keyup="phone_number_mask_reg"
          @keydown="validate_int"
          v-model="regNum"
        />
        <input
          type="text"
          class="p-2 w-100 mt-3"
          v-model="pasportNumber"
          placeholder="Серия и номер паспорта"
        />
        <input
          type="file"
          accept="image/*"
          class="d-none"
          ref="pasportInput"
          @change="pasportInput"
        />
        <button
          class="p-1 w-100 mt-3"
          @click="$refs.pasportInput.click()"
        >{{!selectedPasportInput ? '+ Добавить' : 'Изменить'}} снимок паспорта</button>
        <input type="file" accept="image/*" class="d-none" ref="imageInput" @change="imageInput" />
        <button
          class="p-1 w-100 mt-3"
          @click="$refs.imageInput.click()"
        >{{!selectedImageInput ? '+ Добавить' : 'Изменить'}} снимок</button>
        <input
          :class="{'error': passError}"
          type="password"
          class="p-2 w-100 mt-3"
          v-model="pass"
          placeholder="Пароль"
        />
        <b-alert :show="dismissCountDown" dismissible class="rounded-0 mt-3 mb-0" variant="danger">
          <p @click="dismissCountDown = false" class="m-0">{{errorText}}</p>
        </b-alert>
      </div>
    </div>
    <div @click="reg()" class="countSum w-100 py-2 px-4 text-white text-center mt-2">Регистрация</div>
  </b-modal>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      persona: true,
      pasportNumber: "",
      pass: "",
      regUsername: "",
      regNum: "",
      numParsed: '',
      regMail: "",
      renName: "",
      renSname: "",
      selectedPasportInput: null,
      selectedImageInput: null,

      nameError: false,
      sNameError: false,
      usernameError: false,
      emailError: false,
      numberError: false,
      passError: false,
      showErrorAlert: false,
      dismissCountDown: false,
      dismissSecs: 5,
      errorText: ""
    };
  },
  mounted() {
    localStorage.regNum && (this.regNum = localStorage.regNum);
    localStorage.renName && (this.renName = localStorage.renName);
    localStorage.renSname && (this.renSname = localStorage.renSname);
    localStorage.regMail && (this.regMail = localStorage.regMail);
    localStorage.regUsername && (this.regUsername = localStorage.regUsername);
  },
  watch: {
    regNum(updated) {
      this.numParsed = updated.replace(/[\s.;,?%()_-]/g, '')
      localStorage.regNum = updated;
    },
    regUsername(updated) {
      localStorage.regUsername = updated;
    },
    renName(updated) {
      localStorage.renName = updated;
    },
    renSname(updated) {
      localStorage.renSname = updated;
    },
    regMail(updated) {
      localStorage.regMail = updated;
    }
  },
  methods: {
    pasportInput(e) {
      this.selectedPasportInput = e.target.files[0];
    },
    imageInput(e) {
      this.selectedImageInput = e.target.files[0];
    },
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

    phone_number_mask_reg() {
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
      this.regNum = myOutPut;
      document.getElementById("phoneReg").value = myOutPut;
      document
        .getElementById("phoneReg")
        .setSelectionRange(theLastPos, theLastPos);
    },

    reg() {
      if (!this.renName.match(/^[a-zA-Z]{2,30}$/)) {
        this.errorText =
          "Please use (a-z,A-Z), not less then 2 chars and not more then 30";
        this.nameError = true;
        this.dismissCountDown = true;
        return;
      } else {
        this.dismissCountDown = false;
        this.nameError = false;
      }
      if (!this.renSname.match(/^[a-zA-Z]{2,30}$/)) {
        this.errorText =
          "Please use (a-z,A-Z), not less then 2 chars and not more then 30";
        this.sNameError = true;
        this.dismissCountDown = true;
        return;
      } else {
        this.dismissCountDown = false;
        this.sNameError = false;
      }
      if (!this.regUsername.match(/^[a-zA-Z0-9]+$/)) {
        this.errorText = "Please use (a-z,A-Z,0-9)";
        this.usernameError = true;
        this.dismissCountDown = true;
        return;
      } else {
        this.dismissCountDown = false;
        this.usernameError = false;
      }
      if (
        !this.regMail.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        this.errorText = "Please use (a-z,A-Z), not less then 2 chars";
        this.emailError = true;
        this.dismissCountDown = true;
        return;
      } else {
        this.dismissCountDown = false;
        this.emailError = false;
      }
      if (!this.pass.match(/^[A-Za-z0-9]\w{7,23}$/)) {
        this.errorText =
          "Please enter not less then 8 letters from (a-z, A-Z, 0-9)";
        this.passError = true;
        this.dismissCountDown = true;
        return;
      } else {
        this.dismissCountDown = false;
        this.passError = false;
      }

      let request = new XMLHttpRequest(),
        data = JSON.stringify({
          username: this.regUsername,
          f_name: this.renName,
          l_name: this.renSname,
          email: this.regMail,
          password: this.pass
        });

      request.onreadystatechange = e => {
        if (request.readyState !== 4) {
          return;
        }
        let response = JSON.parse(request.responseText);

        if (
          response.status === "success" &&
          response.message === "Registered successfully."
        ) {
            this.$bvModal.hide("bv-modal-example");
            console.log(this.$bvModal)
            this.$bvModal.show("bv-modal-add");
        } else {
          if (/(email)/g.test(response.message)) {
            this.errorText = "This email is busy";
            this.emailError = true;
            this.dismissCountDown = true;
          } else if (/(username)/g.test(response.message)) {
            this.errorText = "This username is busy";
            this.usernameError = true;
            this.dismissCountDown = true;
          }
        }
      };

      request.open("POST", "http://posilochki.online/api/v1/register");
      request.setRequestHeader("Content-Type", "application/json");
      request.send(data);
    }
  }
};
</script>

<style scoped>
.error {
  border: 1px solid red;
}
.correct {
  border: 1px solid green;
}
.reg {
  left: 0px;
  padding: 15px;
  background-color: #f5f5fa;
  color: #887fba;
  user-select: none;
  cursor: pointer;
}
.reg:hover {
  background-color: #efeff3;
}
.countSum {
  user-select: none;
  cursor: pointer;
  background-color: #f9b21f;
  border-radius: 22px;
  font-size: 16px;
}
p,
button {
  cursor: pointer;
  color: #6f64a4;
  font-size: 15px;
}
.btns > div {
  user-select: none;
}
.active {
  font-size: 13px;
  color: #6f64a4;
  border: 1px solid #6f64a4;
}
.notActive {
  cursor: pointer;
  font-size: 13px;
  color: #b7b2d8;
  border: 1px solid #e2e2e2;
}
</style>


<style>
@media screen and (max-width: 326px) {
  #bv-modal-client___BV_modal_content_,
  #bv-modal-example___BV_modal_content_ {
    width: 200px !important;
  }
  #bv-modal-client___BV_modal_body_,
  #bv-modal-example___BV_modal_body_ {
    min-width: 200px !important;
  }
}
#bv-modal-client,
#bv-modal-example {
  background-color: rgba(158, 146, 212, 0.315);
}
#bv-modal-client___BV_modal_content_,
#bv-modal-example___BV_modal_content_ {
  border: none;
  background-color: transparent;
  border-radius: 0;
  width: 300px;
  display: inline-block !important;
  margin: 0 auto;
  margin-bottom: 50px !important;
}
#bv-modal-client___BV_modal_body_,
#bv-modal-example___BV_modal_body_ {
  position: relative;
  padding: 20px;
  background-color: white;
  min-width: 300px;
}
#bv-modal-client___BV_modal_body_ img,
#bv-modal-example___BV_modal_body_ img {
  width: 60px;
}
#bv-modal-client___BV_modal_body_ span:not(.spanPlus),
#bv-modal-example___BV_modal_body_ span:not(.spanPlus) {
  right: 0;
  top: 0;
  cursor: pointer;
  line-height: 50%;
  font-size: 20px;
  color: #a5a5a5;
  font-weight: 100;
}
</style>
