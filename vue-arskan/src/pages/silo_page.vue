<script setup>
import SiloList from '../components/silo_list.vue'
</script>


<template>
    <div class="silo-page">
        <h2>Silo ESIEE Paris</h2>
        <SiloList />
    </div>
</template>

<script>

export default {
    components: [SiloList]
}

</script>


<style scoped>

.silo-page{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}   

</style>