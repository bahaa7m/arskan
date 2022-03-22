<template>
  <div class="card">
    <div class="thumbnail" :style="'background: url('+ silo.picture +')'"></div>
    <h1 class="title"> {{ silo.name }} </h1>

  </div>
</template>


<script>
export default {
  props: ['silo'],
}
</script>


<style scoped>
  .title{
    font-size: 1.2rem;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }

  .thumbnail{
    width: 300px;
    height: 180px;
    background: whitesmoke;
    border-radius: 13px;
    box-shadow: 1px 1px 15px #373f37;
  }

  .card{
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
    padding: 0;
    box-sizing: border-box;
    /* background-color: aquamarine; */
  }
</style>