<script setup>
  import Silo from "./silo.vue"
</script>

<template>
    <Silo v-for="(e, i) in silos" :key="i" :silo="e"></Silo>
</template>

<script>
export default {
  props: ['silos'],
  components: [Silo],
  created() {
    console.log(this.silos)
  }
}
</script>

<style>
    p{
        color: whitesmoke;
    }
</style>