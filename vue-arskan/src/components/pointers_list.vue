<script setup>
import Pointer from './pointer_item.vue'
</script>

<template>
    <div class="list">
        <Pointer v-for="(p, i) in pointers" :pointer="p" :key="i" />
    </div>
</template>


<script>

export default {
    components: [Pointer],
    props: ["pointers"],
}

</script>


<style scoped>
.list {
    display: flex;
    flex-wrap: wrap;
}
</style>