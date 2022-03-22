<script setup>
  import Silo from "./silo.vue"
  import SiloViewer from './silo_viewer.vue'
</script>

<template>
  <div class="list">
    <!-- <Silo v-for="(e, i) in silos" :key="i" :silo="e"></Silo> -->
    <SiloViewer :url="url"></SiloViewer>
  </div>
</template>

<script>
export default {
  data(){
    return {
      url: ""
    }
  },
  props: ['silos', 'silos-embed-url'],
  components: [Silo, SiloViewer],
}
</script>

<style>
  p{
      color: whitesmoke;
  }

  .list{
    display: flex;
    flex-wrap: wrap;
  }
</style>