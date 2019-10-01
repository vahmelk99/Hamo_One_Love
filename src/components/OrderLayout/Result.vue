<template>
    <div class="w-100 mb-5 par pt-4 pb-2 text-white">
        <b-container class="cont">
            <p class="mb-3 cap">Итого: 119 ₽</p>
            <b-button pill @click="addParcel()" class="px-4 but mb-3">Отправить заявку</b-button>
            <p>Параметры СМС уведомлений можно указать после отправки заявки</p>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Result',
    methods: {
        addParcel(){
            console.log(localStorage)
        }
    },
}
</script>

<style scoped>
.par{
    background-color: #f9b21f;
}
.but{
    background-color: #5a4895;
    border: 1px solid #5a4895 !important;
}
.but:hover{
    background-color: #503f86;
}
.but:active{
    background-color: #5a4895 !important;
    outline: #3d327c !important;
}
.cont{
  padding: 0 7vw;
}
.cap{
    margin: 0;
    padding: 0;
    font-size: 25px;
    font-weight: bold;
}
</style>