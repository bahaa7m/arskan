<template>
    <form v-if="editable" @submit.prevent="submitForm">
        <div class="form-control">
            <label for="object-name">Nom</label>
            <input id="object-name" name="object-name" type="text" v-model="oName"/>
        </div>

        <div class="form-control">
            <label for="object-description">Description</label>
            <input id="object-description" name="object-description" type="text" v-model="oDescription"/>
        </div>

        <button @submit="submitForm">Confirmer</button>
    </form>
    <div class="p" v-else>Modifications non autorisée sur cet objet.</div>
</template>


<script>


export default {
    inject: ['updateObject'],
    props: ['editable', 'siloObject'],
    data() {
        return {
            oName: this.siloObject.name,
            oDescription: this.siloObject.description,
        }
    },
    methods: {
        submitForm() {
            this.updateObject(this.siloObject, this.oName, this.oDescription)
        },
    }
}

</script>


<style scoped>

form{
    font-size: 1.2rem;
}

.form-control{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

input{
    margin: 10px 30px;
    margin-right: 0;
    height: 35px;
}

button{
    font-size: 1rem;
    padding: 10px 15px;
    margin-top: 30px;
    box-sizing: border-box;
}

</style>