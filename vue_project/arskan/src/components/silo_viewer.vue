<template>
    <div class="viewer">
        <iframe :src="url" frameborder="0"></iframe>
    </div>
</template>


<script>
export default {
  props: ['url'],
}
</script>


<style scoped>
    .viewer{
        width: 90%;
        height: 70%;
    }
</style>