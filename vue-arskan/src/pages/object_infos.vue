<script setup>
import ObjectViewer from '../components/object_viewer.vue'
</script>


<template>
    <div class="info-page">
        <router-link to="/" class="home-btn">RETOUR</router-link>
        <h1>{{ objectName }}</h1>
        <h5>{{ objectDescription }}</h5>
        <ObjectViewer :url="embedUrl" />
        <h3>Modification</h3>
        <form v-if="id === red_car_id">Form modifs</form>
        <div class="p" v-else>Modifications non autorisée sur cet objet.</div>
    </div>
</template>


<script>

export default {
    components: [ObjectViewer],
    props: ["siloObjects"],
    data() {
        return {
            red_car_id: "62278c5ecd78795d5ce9b3de"
        }
    },
    computed: {
        embedUrl() {
            if (this.id === this.red_car_id)
                return "https://viewer.arskan.com/objects/share/623b2a2eeb315945a0231026"
            return "https://viewer.arskan.com/"
        },
        siloObject(){
            return this.siloObjects.find(o => o._id === this.id)
        },
        objectName(){
            return this.siloObject.name
        },
        objectDescription(){
            console.log(this.siloObject)
            return this.siloObject.description
        },
        id() {
            return this.$route.params.id
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

.home-btn{
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