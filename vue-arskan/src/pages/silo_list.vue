<script setup>
import SiloObject from "../components/silo_object.vue"
</script>


<template>
    <div class="list">
        <SiloObject v-for="(e, i) in siloObjects" :key="i" :item="e" />
    </div>
</template>


<script>
export default {
    components: [SiloObject],
    props: ["siloObjects"],
}
</script>


<style>
p {
    color: whitesmoke;
}

.list {
    display: flex;
    flex-wrap: wrap;
}
</style>