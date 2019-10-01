<template>
  <div id="app">
    <ejs-slider 
      id='type' 
      :min='minVal'
      :max='maxVal'
      v-on:created.once="onCreated" 
      v-on:click.once="onChange" 
      :value='[minVal, maxVal]' 
      :type="type" 
      :step="step" 
      :tooltipChange="tooltipChange" 
      :tooltip="tooltip"
    ></ejs-slider>
  </div>
</template>
<script>
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);

export default {
    name: 'Slider',
    props: ['minTime', 'day'], 
    data() {
      return {
        minVal: 0,
        maxVal: 47,
        type: 'Range',
        tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
        step: 1,
        dateArr: []
      };
  },
  created() {
    this.hourGenerator();
  },
  watch: {
    day(){
      this.hourGenerator();
    }
  },
  methods: {
    tooltipChange(args) {
        args.text = this.dateArr[parseFloat(args.value[0])] + ' - ' + this.dateArr[parseFloat(args.value[1])];
    },
    hourGenerator(){
      let date = new Date();
      date.setHours(parseInt(this.minTime.substr(0, 2)), parseInt(this.minTime.substr(3)));
      // console.log(this.minTime.substr(3));
      let t = (this.day === 'сегодня' ? 1 : 0);
      for ( let i = ( t ? date.getHours() : 0 ), j = 0; i < 24; i++, j += 2 ) {
        let k = i;
        if (i < 10) k = '0' + k;
        if (date.getMinutes() == 30 && t) {
          this.dateArr[j] = `${k}:30`;
          j--;                                                      //yaxq
        } else {
          this.dateArr[j + 1] = `${k}:30`;
          this.dateArr[j] = `${k}:00`;
        }
        t = 0;
      }
      this.maxVal = this.dateArr.length - 1;
    },
    onCreated(args) {
      let sliderTrack = document
          .getElementById("app")
          .querySelectorAll(".e-range"),
        sliderHandle = document
          .getElementById("app")
          .querySelectorAll(".e-handle"),
        sliderControl = document
          .getElementById("app")
          .querySelectorAll(".e-slider"),
        chcolor = () => {
          setTimeout(() => {
            let e_pop = document.getElementsByClassName('e-popup');
            let e_arrow_inner = document.getElementsByClassName('e-arrow-tip-inner');
            let e_arrow_outer = document.getElementsByClassName('e-arrow-tip-outer');
            for (let i = 0; i < e_pop.length; i++) {
              e_pop[i].style.backgroundColor = '#62569c';
            }
            for (let j = 0; j < e_arrow_inner.length; j++) {
              e_arrow_inner[j].style.color = '#62569c';
            }
            for (let k = 0; k < e_arrow_outer.length; k++) {
              e_arrow_outer[k].style.borderTopColor = '#62569c';
            }
          }, 100);
        };
        for (let i = 0; i < sliderHandle.length; i++) {
          sliderHandle[i].style.backgroundColor = "#62569c";
          sliderHandle[i].addEventListener('mousedown', chcolor);
        }
        for (let i = 0; i < sliderTrack.length; i++) {
          sliderTrack[i].addEventListener('mousedown', chcolor);          
          sliderTrack[i].style.backgroundColor = "#62569c";  
          sliderControl[i].addEventListener('mousedown', chcolor);      
        }
    },
    onChange(args) {
      let e_popup = document.getElementsByClassName('e-popup');
      for (let i = 0; i < e_popup.length; i++) {
        e_popup[i].style.backgroundColor = "#62569c";
      }
      this.tooltip.isVisible = true;
    }
  },
}
</script>

<style scoped>
@import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>