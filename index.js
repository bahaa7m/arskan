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

app.post('/silo/:id', (req, res) => {
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