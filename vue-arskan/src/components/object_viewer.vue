<template>
    <div id="embedViewer" class="viewer">
        <iframe :src="url" frameborder="0" ></iframe>
    </div>
</template>


<script>
export default {
    props: ['url'],
}
</script>


<style scoped>
.viewer {
    width: 90%;
    height: 50vw;
    margin: auto;
    box-shadow: 1px 1px 15px #131713;
}

iframe {
    width: 100%;
    height: 100%;
}
</style>