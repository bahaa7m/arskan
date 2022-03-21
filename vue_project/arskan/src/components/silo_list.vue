<template>
    <p v-for="(e, i) in silos" :key="i">{{ e.name }}</p>
</template>

<script>
export default {
  props: ['silos'],
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