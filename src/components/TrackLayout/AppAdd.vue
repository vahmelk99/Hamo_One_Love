<template>
    <div class="app mb-2">
        <b-container class="cont pb-4">
            <h4 class="d-inline-block mt-4 mr-2">Хотите еще более удобное отслеживание&nbsp;заказов?</h4>
            <div class="d-inline-block mt-4">
                <a href="#" class="mx-2"><img src="img/appstore-badge.png" class="appsIcon" alt=""></a>
                <a href="#" class="mx-2"><img src="img/google-badge.png" class="appsIcon" alt=""></a>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'AppAdd'
}
</script>

<style scoped>
@media screen and (max-width: 767.5px) {
h4{
    text-align: center;
    display: block;
}
.cont>div{
    display: flex !important;
    justify-content: center !important;
    flex-wrap: wrap !important;
}
}
.app{
    background-color: #f4f4f9;
}
h4{
    color: #f9b21f;
    margin: 0;  
}
.appsIcon{
    width: 120px;
}
</style>
