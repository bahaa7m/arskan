<script setup>
import Pointer from './pointer_item.vue'
import NewPointer from './pointeur_new.vue'
</script>

<template>
    <div class="list">
        <p v-if="pointers.length == 0">No pointers available</p>
        <Pointer v-for="(p, i) in pointers" :pointer="p" :key="i" />
        <div id="add-button" @click="createPointer">
            <p>New pointer</p>
        </div>
        <Teleport to="#container">
            <NewPointer v-if="showNewPointer"/>
        </Teleport>
    </div>
</template>


<script>

export default {
    components: [Pointer, NewPointer],
    props: ["pointers"],
    provide() {
        return{
            closeNewPointer: this.closeNewPointer
        }
    },
    data(){
        return {
            showNewPointer: false
        }
    },
    methods:{
        createPointer(){
            this.showNewPointer = true
        },
        closeNewPointer(){
            this.showNewPointer = false
        }
    }
}

</script>


<style scoped>
.list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

#add-button {
    background: #58b8aa;
    padding: 0 15px;
    box-sizing: border-box;
    border-radius: 13px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#add-button:hover {
    cursor: pointer;
}
</style>