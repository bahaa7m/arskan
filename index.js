const express = require('express')
const axios = require('axios')
const app = express()
const port = 3030

app.use(express.static('vue_project/arskan/dist'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/all', (req, res) => {
    data = null
    
    axios
    .get("https://public-api.arskan.com/objects", {
        method : "GET",
        headers: {"Authorization": req.headers.authorization},
    })
    .then(_res => {
        res.send({data: _res.data})
    })
    .catch(error => {
        console.error(error)
        data = error
    })
  })
  