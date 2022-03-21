<script setup>
  import SiloList from "./components/silo_list.vue"
</script>

<template>
  <h1>ARSKAN</h1>
  <SiloList :silos="silos"></SiloList>
</template>

<script>
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNlbGluZUBrcmFiYmkuZnIiLCJzaWxvIjoiNjIxNjVmOWFlZjAwZjAyZTEzYzc2ZDdjIiwiaWF0IjoxNjQ2OTA5MzExLCJpc3MiOiJodHRwczovL2FwaS5hcnNrYW4uY29tIn0.ENwjv5bwwtwxOWcGMxJ4CZ-GrhamEfDOMjPmm2Bpdac"

export default {
  components: {
    SiloList
  },
  data(){
    return {
      silos: ['test','1','sdfhj'],
    }
  },
  mounted: function() {
    fetch("http://localhost:3030/all", {
        method : "GET",
        headers: {'Authorization': token},
    })
    .then((response) => {
        console.log("response : ")
        console.log(response)
        if (!response.ok) {
            throw new Error(response.error)
        }
        return response.json();
    })
    .then(data => {
        console.log("data : ", data)
        this.silos = data.data
    })
    .catch(function(error) {
        console.log("error : ", error)
    });
  }
}

</script>

<style>
  html{
    background: #020a0f;
    color: white;
  }

  h1{
    font-size: 2.5em;
    text-align: center;
  }
</style>
