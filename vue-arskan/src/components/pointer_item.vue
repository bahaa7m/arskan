<template>
    <div class="card">
        <div class="mbutton edit" v-if="!isEditing" @click="edit">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#282828"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
            >
                <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                />
            </svg>
        </div>
        <div class="edit-actions" v-else>
            <div class="mbutton cancel" @click="cancelEdits">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#282828"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    />
                </svg>
            </div>
            <div class="mbutton confirm" @click="confirmEdits">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="#282828"
                    class="bi bi-check2"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                    />
                </svg>
            </div>
        </div>

        <form @submit.prevent>
            <input class="title" placeholder="title" :disabled="!isEditable" v-model="mTitle" />
            <input
                class="description"
                placeholder="description"
                :disabled="!isEditable"
                v-model="mDescription"
            />

            <section>
                <div class="title">Camera</div>
                <div class="position">
                    <div class="label">Position</div>
                    <div class="coordonnee">
                        <input
                            class="pos-value"
                            type="number"
                            v-for="(v, i) in pointer.camera.position"
                            :disabled="!isEditable"
                            v-model="mCamPos[i]"
                        />
                    </div>
                </div>
                <div class="position">
                    <div class="label">Target</div>
                    <div class="coordonnee">
                        <input
                            class="pos-value"
                            type="number"
                            v-for="(v, i) in pointer.camera.target"
                            :disabled="!isEditable"
                            v-model="mCamTarget[i]"
                        />
                    </div>
                </div>
            </section>

            <section>
                <div class="title">Pointer position</div>
                <div class="coordonnee">
                    <input
                        class="pos-value"
                        type="number"
                        v-for="(v, i) in pointer.position"
                        :disabled="!isEditable"
                        v-model="mPos[i]"
                    />
                </div>
            </section>
        </form>
    </div>
</template>

<script>

export default {
    props: ["pointer"],
    inject: ["redCarId"],
    data() {
        return {
            editable: this.$route.params.id === this.redCarId,
            isEditing: false,
            // models
            mTitle: this.pointer.title,
            mDescription: this.pointer.description,
            mCamPos: this.pointer.camera.position,
            mCamTarget: this.pointer.camera.target,
            mPos: this.pointer.position,            
        }
    },
    computed:{
        isEditable(){
            return this.editable && this.isEditing
        }
    },
    methods: {
        edit() {
            if(!this.editable) return
            this.isEditing = true
        },
        cancelEdits() {
            this.isEditing = false
            this.resetModels()
        },
        confirmEdits() {
            this.isEditing = false
            this.resetModels()
        },
        resetModels() {
            console.log(this.pointer.camera.position)
            this.mTitle = this.pointer.title
            this.mDescription = this.pointer.description
            this.mCamPos = this.pointer.camera.position
            this.mCamTarget = this.pointer.camera.target
            this.mPos = this.pointer.position
        }
    }
}

</script>

<style scoped>
.card {
    position: relative;
    width: 350px;
    background: #a8a8a8;
    box-sizing: border-box;
    margin: 30px;
    padding: 15px 30px;
    border-radius: 15px;
}

.title {
    font-size: 1.5rem;
}

.description {
    font-size: 1.1rem;
    color: #e7e7e7;
}

section .title {
    font-size: 1.2rem;
}

.coordonnee {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 15px 0;
}

.coordonnee .pos-value {
    background: #58a858;
    padding: 10px;
    border-radius: 9px;
    width: 55px;
    height: 25px;
}

.label {
    text-align: center;
    font-size: 0.9rem;
    color: #e7e7e7;
}

.mbutton {
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 5px;
    width: 30px;
    height: 30px;
    border-radius: 13px;
    background: #77d777;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 250ms;
}

.mbutton.confirm {
    width: 25px;
    height: 25px;
    right: 50px;
    top: 7.5px;
}

.mbutton:hover {
    cursor: pointer;
    background: #77d777aa;
}
.mbutton.cancel:hover {
    background: #d77777aa;
}

input,
input:focus,
textarea:focus,
select:focus {
    background: none;
    border: none;
    outline: none;

}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
</style>