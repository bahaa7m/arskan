<script setup>
import ObjectViewer from '../components/object_viewer.vue'
import ModifForm from '../components/modif_form.vue'
import PointerList from '../components/pointers_list.vue'
</script>


<template>
    <div class="info-page">
        <router-link to="/" class="home-btn">RETOUR</router-link>
        <h3>{{ objectName }}</h3>
        <h5>{{ objectDescription }}</h5>
        <ObjectViewer :url="embedUrl" />
        <h2>Modification</h2>
        <ModifForm :editable="isRedCar" :silo-object="siloObject"/>
        <h2>Pointeurs</h2>
        <PointerList :pointers="pointers"/>
    </div>
</template>


<script>
export default {
    components: [ObjectViewer, ModifForm, PointerList],
    inject: ["siloObjects", "redCarId"],
    computed: {
        isRedCar(){
            return this.id === this.redCarId
        },
        embedUrl() {
            return "https://viewer.arskan.com" + this.siloObject.embed.url
        },
        siloObject() {
            return this.siloObjects.find(o => o._id === this.id)
        },
        objectName() {
            return this.siloObject.name
        },
        objectDescription() {
            return this.siloObject.description
        },
        id() {
            return this.$route.params.id
        },
        pointers(){
            return this.siloObject.pointers
        }
    }
}
</script>


<style scoped>
.info-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.home-btn {
    position: absolute;
    top: 20px;
    left: 15px;
    text-decoration: none;
    color: #080808;
    background: #00afaf;
    box-sizing: border-box;
    padding: 20px 35px;
    border-radius: 13px;
}
</style>