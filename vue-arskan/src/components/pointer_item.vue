<template>
    <div class="card">
        <div class="title">{{ pointer.title }}</div>
        <div class="description">{{ pointer.description }}</div>

        <section>
            <div class="title">Camera</div>
            <div class="position">
                <div class="label">Position</div>
                <div class="coordonnee">
                    <div class="pos-value" v-for="v in pointer.camera.position ">{{ v.toFixed(2) }}</div>
                </div>
            </div>
            <div class="position">
                <div class="label">Target</div>
                <div class="coordonnee">
                    <div class="pos-value" v-for="v in pointer.camera.target ">{{ v.toFixed(2) }}</div>
                </div>
            </div>
        </section>

        <section>
            <div class="title">Pointer position</div>
            <div class="coordonnee">
                <div class="pos-value" v-for="v in pointer.position">{{ v.toFixed(2) }}</div>
            </div>
        </section>
    </div>
</template>


<script>

export default {
    props: ["pointer"],
}

</script>

<style scoped>
.card {
    width: 350px;
    background: #a8a8a8;
    box-sizing: border-box;
    margin: 30px;
    padding: 15px 30px;
    border-radius: 15px;
}

.title{
    font-size: 1.5rem;
}

.description{
    font-size: 1.1rem;
    color: #e7e7e7;
}

section .title{
    font-size: 1.2rem;
}

.coordonnee{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 15px 0;
}

.coordonnee .pos-value{
    background: #58a858;
    padding: 10px;
    border-radius: 9px;
}

.label{
    text-align: center;
    font-size: .9rem;
    color: #e7e7e7;
}

</style>