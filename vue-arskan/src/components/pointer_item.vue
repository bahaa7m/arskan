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
            <input
                class="title"
                placeholder="title"
                :disabled="!isEditable"
                v-model="mTitle"
                maxlength="25"
            />
            <input
                class="description"
                placeholder="description"
                :disabled="!isEditable"
                v-model="mDescription"
                maxlength="50"
            />

            <section>
                <div class="title">Camera</div>
                <div class="position">
                    <div class="label">Position</div>
                    <div class="coordonnee">
                        <input
                            class="pos-value"
                            type="number"
                            v-for="(_, i) in mCamPos"
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
                            v-for="(_, i) in mCamTarget"
                            :disabled="!isEditable"
                            v-model="mCamTarget[i]"
                        />
                    </div>
                </div>
            </section>

            <section>
                <div class="title">Position</div>
                <div class="coordonnee">
                    <input
                        class="pos-value"
                        type="number"
                        v-for="(_, i) in mPos"
                        :disabled="!isEditable"
                        v-model="mPos[i]"
                    />
                </div>
            </section>
        </form>
        <div class="footer">
            <div id="delete-btn" class="btn" @click="remove">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-trash3"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                    />
                </svg>
                <p>Supprimer</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ["pointer"],
    inject: ["redCarId", "deletePointer", "updatePointer"],
    data() {
        return {
            editable: this.$route.params.id === this.redCarId,
            isEditing: false,
            // input models
            mTitle: this.pointer.title,
            mDescription: this.pointer.description,
            mCamPos: this.pointer.camera.position,
            mCamTarget: this.pointer.camera.target,
            mPos: this.pointer.position,
            initValues: { ...this.pointer },
        }
    },
    computed: {
        isEditable() {
            return this.editable && this.isEditing
        }
    },
    created() {
        console.log(this.initValues)
        this.resetModels()
    },
    methods: {
        edit() {
            this.isEditing = this.editable & true
        },
        cancelEdits() {
            this.isEditing = false
            this.resetModels()
        },
        confirmEdits() {
            const inputs = this.$el.getElementsByClassName("pos-value")
            var isValid = true

            for (const i of inputs) {
                if (isNaN(i.valueAsNumber)) {
                    i.classList.add("invalid")
                    isValid = false
                }
                else if (i.classList.contains('invalid')) {
                    i.classList.remove("invalid")
                }
            }
            console.log(isValid)
            if (!isValid) return false

            this.updatePointer(this.pointer.id, {
                title: this.mTitle,
                description: this.mDescription,
                camera: {
                    position: this.mCamPos,
                    target: this.mCamTarget,
                },
                position: this.mPos,
            })

            this.isEditing = false
        },
        resetModels() {
            this.mTitle = this.pointer.title
            this.mDescription = this.pointer.description
            this.mCamPos = this.pointer.camera.position
            this.mCamTarget = this.pointer.camera.target
            this.mPos = this.pointer.position
        },
        remove(){
            // console.log(this.pointer.id)
            this.deletePointer(this.pointer.id)
        },
    }
}

</script>

<style scoped>
@import "../assets/pointer.css";

.card {
    position: relative;
    width: 350px;
    background: #a8a8a8;
    box-sizing: border-box;
    margin: 30px;
    padding: 15px 30px;
    border-radius: 15px;
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

.footer {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 10px;
}

#delete-btn {
    background: #7f5858;
}

#delete-btn p{
    margin-left: 10px;
}
</style>