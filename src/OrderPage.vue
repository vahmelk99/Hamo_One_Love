<template>
  <div id="app">
    <b-container class="cont">
      <DeliveryForm/>
    </b-container>
      <Result/>
  </div>
</template>

<script>
import Result from './components/OrderLayout/Result.vue'
import DeliveryForm from './components/OrderLayout/DeliveryForm.vue'

export default {
  name: 'OrderPage',
  components: {
    Result,
    DeliveryForm,
  }
}
</script>

<style scoped>
.text-center{
  margin-bottom: 200px !important;
}
.cont{
  padding: 0 5.2vw;
}
</style>

<style>
input::placeholder, textarea::placeholder{
    color: #646464;
}
input, select, option{
    font-size: 13px;
    border: 1px solid #cbc7dd;
}
span.spanPlus{
    left: 5px;
    top: 25px;
    font-size: 13px
}
</style>



