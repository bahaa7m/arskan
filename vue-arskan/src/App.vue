<template>
    <h1>ARSKAN</h1>
    <router-view></router-view>
    <div class="loader-container" v-if="isLoading">
        <span class="loader"></span>
    </div>
</template>


<script>

export default {
    data() {
        return {
            siloObjects: [],
            profile: {},
            isLoading: true,
            redCarId: "62278c5ecd78795d5ce9b3de"
        }
    },
    provide() {
        return {
            siloObjects: this.siloObjects,
            updateObject: this.updateObject,
            redCarId: this.redCarId,
        }
    },
    created() {
        this.fetchObjects()
    },
    methods: {
        fetchObjects() {
            this.isLoading = true
            fetch("http://localhost:3030/all", {
                method: "GET",
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(response.error)
                    }
                    return response.json();
                })
                .then(data => {
                    this.siloObjects.push(...data.data)
                    // this.isLoading = false
                    // this.fetchPointers()
                    this.fetchProfiles()
                })
                .catch(function (error) {
                    console.log("error : ", error)
                });
        },
        fetchProfiles() {
            fetch("http://localhost:3030/profiles", {
                method: "GET",
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(response.error)
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.error) {
                        throw new Error(data.error.message)
                    }
                    // console.log("data : ", data)
                    this.profile = {
                        name: data.data[0].name,
                        id: data.data[0].id
                    }
                    // console.log(this.profile)
                    this.fetchEmbedUrls()
                })
                .catch(function (error) {
                    console.log("error : ", error)
                });
        },
        fetchEmbedUrls() {
            for (const o of this.siloObjects) {
                const i = this.siloObjects.indexOf(o)
                fetch("http://localhost:3030/embed/" + o._id, {
                    method: "POST",
                    mode: 'cors',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "profile": this.profile.id,
                        "name": this.profile.name
                    })
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(response.error)
                        }
                        return response.json();
                    })
                    .then(data => {
                        if (data.error) {
                            throw new Error(data.error.message)
                        }
                        this.siloObjects[i]["embed"] = data.data
                        if (i == this.siloObjects.length - 1)
                            this.fetchPointers()
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
            }
            // console.log(this.siloObjects)
        },
        updateObject(siloObject, nname, ndescription) {
            fetch("http://localhost:3030/update/" + siloObject._id, {
                method: "PUT",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "name": nname != "" ? nname : siloObject.name,
                    "description": ndescription != "" ? ndescription : siloObject.description,
                })
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(response.error)
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.error) {
                        throw new Error(data.error.message)
                    }
                    // console.log("data : ", data)
                    if (data.data === "") {
                        const index = this.siloObjects.indexOf(siloObject)
                        this.siloObjects[index].name = nname
                        this.siloObjects[index].description = ndescription
                    }
                })
                .catch(function (error) {
                    console.log(error)
                });
        },
        fetchPointers() {
            const n = this.siloObjects.length
            for (const [i, o] of this.siloObjects.entries()) {

                fetch("http://localhost:3030/pointers/" + o._id, {
                    method: "GET",
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(response.error)
                        }
                        return response.json();
                    })
                    .then(data => {
                        // console.log("data pointers : ", data)
                        o["pointers"] = data.data
                        if (i == n - 1) {
                            this.isLoading = false
                            console.log("updated objects : ", this.siloObjects)
                        }
                    })
                    .catch(function (error) {
                        console.log("error : ", error)
                    });
            }
        },
        addPointer(objectId, pointer) {
            fetch("http://localhost:3030/pointers/add/" + objectId, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(pointer)
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(response.error)
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.error) {
                        throw new Error(data.error.message)
                    }
                    console.log(data)
                })
                .catch(function (error) {
                    console.log(error)
                });
        },
        updatePointer(id, pointer) {
            fetch("http://localhost:3030/pointers/update/" + id, {
                method: "PUT",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(pointer)
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(response.error)
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.error) {
                        throw new Error(data.error.message)
                    }
                    console.log(data)
                })
                .catch(function (error) {
                    console.log(error)
                });
        },
        deletePointer(id) {
            fetch("http://localhost:3030/pointers/delete/" + id, {
                method: "DELETE",
                mode: 'cors',
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(response.error)
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.error) {
                        throw new Error(data.error.message)
                    }
                    console.log(data)
                })
                .catch(function (error) {
                    console.log(error)
                });
        }
    },
}
</script>


<style>
html {
    background: #282828;
    color: white;
}

h1 {
    font-size: 2.5em;
    text-align: center;
}

.loader-container {
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loader {
    width: 48px;
    height: 48px;
    border: 3px solid #fff;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    animation: pulse 1s linear infinite;
}

.loader:after {
    content: "";
    position: absolute;
    width: 48px;
    height: 48px;
    border: 3px solid #fff;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: scaleUp 1s linear infinite;
}

@keyframes scaleUp {
    0% {
        transform: translate(-50%, -50%) scale(0);
    }
    60%,
    100% {
        transform: translate(-50%, -50%) scale(1);
    }
}
@keyframes pulse {
    0%,
    60%,
    100% {
        transform: scale(1);
    }
    80% {
        transform: scale(1.2);
    }
}
</style>
