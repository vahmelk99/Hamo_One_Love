<template>
    <div class="app">
        <b-container class="cont">
            <TrackInp/>
        </b-container>
        <AppAdd v-if="isWeb"/>
    </div>
</template>

<script>
import TrackInp from './components/TrackLayout/TrackInp.vue'
import AppAdd from './components/TrackLayout/AppAdd.vue'

export default {
    props:{
        isWeb: String
    },
    components: {
        TrackInp,
        AppAdd
    }
}
</script>

<style scoped>

</style>
