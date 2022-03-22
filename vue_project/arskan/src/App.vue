<script setup>
import SiloList from "./components/silo_list.vue"
</script>

<template>
    <h1>ARSKAN</h1>
    <SiloList :silos="silos"></SiloList>
</template>

<script>

export default {
    components: {
        SiloList
    },
    data() {
        return {
            silos: [],
            silosEmbedUrl: [],
            profile: {}
        }
    },
    created() {
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
                // console.log("data : ", data)
                this.silos = data.data
                this.fetchProfiles()
            })
            .catch(function (error) {
                console.log("error : ", error)
            });
    },
    methods: {
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
            console.log(this.profile)
            for (const obj of this.silos) {
                fetch("http://localhost:3030/silo/" + obj._id, {
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
                        // console.log("data : ", data)
                        this.silosEmbedUrl.push(data.data)
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
            }
            // console.log("Embed data : ")
            // console.log(this.silosEmbedUrl)
        }
    }
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
</style>
