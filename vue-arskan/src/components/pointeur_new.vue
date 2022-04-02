<template>
    <div class="bottom-sheet">
        <div class="card">
            <form @submit.prevent>
                <input class="title" placeholder="title" v-model="mTitle" maxlength="25" />
                <input
                    class="description"
                    placeholder="description"
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
                            v-model="mPos[i]"
                        />
                    </div>
                </section>
            </form>
            <div class="actions">
                <div id="add-button" class="btn" @click="submitData">
                    <p>Ajouter</p>
                </div>
                <div id="cancel-button" class="btn" @click="closeForm">
                    <p>Annuler</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    inject: ["closeNewPointer", "addPointer"],
    data() {
        return {
            mTitle: "",
            mDescription: "",
            mCamPos: [0, 0, 0],
            mCamTarget: [0, 0, 0],
            mPos: { x: 0, y: 0, z: 0 },
        }
    },
    computed: {
        id() {
            return this.$route.params.id
        }
    },
    methods: {
        submitData() {
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
            if(this.mTitle === "" || this.mDescription === "") isValid = false

            if (!isValid) return false

            this.addPointer(this.id, {
                title: this.mTitle,
                description: this.mDescription,
                camera: {
                    position: this.mCamPos,
                    target: this.mCamTarget,
                },
                position: this.mPos,
            })
            this.closeForm()
        },
        closeForm() {
            this.closeNewPointer()
        }
    },
}

</script>


<style scoped>
@import "../assets/pointer.css";

.bottom-sheet {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #777777a7;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.actions {
    display: flex;
    flex-direction: row-reverse;
}

#add-button {
    background: #18b8aa;
}

#cancel-button {
    background: none;
}

#cancel-button p {
    color: #d88888;
}

.card {
    width: 50%;
    height: 50%;
    background: #282828;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 25px;
}
</style>