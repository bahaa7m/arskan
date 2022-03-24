const express = require('express')
const axios = require('axios')
var cors = require('cors')
const app = express()
const port = 3030

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNlbGluZUBrcmFiYmkuZnIiLCJzaWxvIjoiNjIxNjVmOWFlZjAwZjAyZTEzYzc2ZDdjIiwiaWF0IjoxNjQ2OTA5MzExLCJpc3MiOiJodHRwczovL2FwaS5hcnNrYW4uY29tIn0.ENwjv5bwwtwxOWcGMxJ4CZ-GrhamEfDOMjPmm2Bpdac"

app.use(express.json());
app.use(cors())
// app.use(express.static('vue_project/arskan/dist'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/all', (req, res) => {
    console.log("GET ALL OBJECT OF SILO")
    axios
        .get("https://public-api.arskan.com/objects", {
            headers: { "Authorization": token },
        })
        .then(_res => {
            res.send({ data: _res.data })
        })
        .catch(error => {
            console.error(error)
        })
})


app.get('/profiles', (req, res) => {
    console.log("GET PROFILES")

    axios
        .get("https://public-api.arskan.com/profiles", {
            headers: { "Authorization": token },
        })
        .then(_res => {
            // console.log("profiles : ", _res.data)
            res.send({ data: _res.data })
        })
        .catch(error => {
            console.error(error)
        })

})

app.post('/embed/:id', (req, res) => {
    console.log("GET EMBED URL")
    console.log(req.body)
    console.log(req.params.id)

    axios
        .post(
            "https://public-api.arskan.com/objects/" + req.params.id + "/embed",
            {
                'name': req.body.name,
                'profile': req.body.profile,
            },
            {
                headers: { "Authorization": token },
            })
        .then(_res => {
            res.send({ data: _res.data })
        })
        .catch(error => {
            // console.log(error)
            res.send({ error: error })
        })
})

app.put('/update/:id', (req, res) => {
    console.log("UPDATE OBJECT INFOS")
    console.log(req.body)
    console.log(req.params.id)

    axios
        .put(
            "https://public-api.arskan.com/objects/" + req.params.id,
            req.body,
            {
                headers: { "Authorization": token },
            })
        .then(_res => {
            res.send({ data: _res.data })
        })
        .catch(error => {
            res.send({ error: error })
        })
})


app.get('/pointers/:id', (req,res) => {
    console.log("GET ALL POINTER")
    console.log(req.params.id)

    axios
        .get(
            "https://public-api.arskan.com/objects/" + req.params.id +"/pointers",
            {
                headers: { "Authorization": token },
            })
        .then(_res => {
            res.send({ data: _res.data })
        })
        .catch(error => {
            res.send({ error: error })
        })
})


app.post('/pointers/add/:id', (req,res) => {
    console.log("ADD POINTER")
    console.log(req.body)
    console.log(req.params.id)

    /*
    *** BODY ***
    {
        title: "title",
        description: "description",
        camera: {
            position: [x,y,z],
            target: [x,y,z],
        },
        position: [x,y,z],
    }
    ************
    */

    axios
        .post(
            "https://public-api.arskan.com/objects/" + req.params.id + "/pointers",
            req.body,  
            {
                headers: { "Authorization": token },
            })
        .then(_res => {
            res.send({ data: _res.data })
        })
        .catch(error => {
            res.send({ error: error })
        })
})


app.put('/pointers/update/:id', (req,res) => {
    console.log("UPDATE POINTER")
    console.log(req.body)
    console.log(req.params.id)

    /*
    *** BODY ***
    {
        title: "title",
        description: "description",
        camera: {
            position: [x,y,z],
            target: [x,y,z],
        },
        position: [x,y,z],
    }
    ************
    */

    axios
        .put(
            "https://public-api.arskan.com/pointers/" + req.params.id,
            req.body,  
            {
                headers: { "Authorization": token },
            })
        .then(_res => {
            res.send({ data: _res.data })
        })
        .catch(error => {
            res.send({ error: error })
        })
})


app.delete('/pointers/delete/:id', (req,res) => {
    console.log("DELETE POINTER")
    console.log(req.body)
    console.log(req.params.id)

    axios
        .delete(
            "https://public-api.arskan.com/pointers/" + req.params.id ,
            req.body,  
            {
                headers: { "Authorization": token },
            })
        .then(_res => {
            res.send({ data: _res.data })
        })
        .catch(error => {
            res.send({ error: error })
        })
})
