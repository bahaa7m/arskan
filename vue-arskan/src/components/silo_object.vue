<template>
    <div class="card">
        <router-link :to="'/object/' + item._id">
            <div class="thumbnail" :style="'background: url(' + item.picture + ') no-repeat center; background-size: cover;'">
                <div class="hover-info">Ouvrir</div>
            </div>
        </router-link>
        <h1 class="title">{{ item.name }}</h1>
    </div>
</template>


<script>
export default {
    props: ['item'],
}
</script>


<style scoped>
.card{
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: start;
}

.title {
    font-size: 1.2rem;
    overflow: hidden;
    white-space: nowrap;
    max-width: 300px;
}

.thumbnail {
    width: 300px;
    height: 180px;
    background: whitesmoke;
    border-radius: 13px;
    box-shadow: 1px 1px 15px #373f37;
}

.hover-info{
    background: #00afaf27;
    width: 100%;
    height: 100%;
    border-radius: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0;
    transition: all 150ms;
}


.thumbnail:hover{
    box-shadow: 0 0 0 #000;
}
.thumbnail:hover .hover-info{
    opacity: 1;
}

.card {
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