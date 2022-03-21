const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNlbGluZUBrcmFiYmkuZnIiLCJzaWxvIjoiNjIxNjVmOWFlZjAwZjAyZTEzYzc2ZDdjIiwiaWF0IjoxNjQ2OTA5MzExLCJpc3MiOiJodHRwczovL2FwaS5hcnNrYW4uY29tIn0.ENwjv5bwwtwxOWcGMxJ4CZ-GrhamEfDOMjPmm2Bpdac"

function getAll(){
    console.log("Get all");

    fetch("http://localhost:3030/all", {
        method : "GET",
        headers: {'Authorization': token},
    })
    .then((response) => {
        console.log("response : ")
        console.log(response)
        if (!response.ok) {
            throw new Error(response.error)
        }
        return response.json();
    })
    .then(data => {
        console.log("data : ", data)
    })
    .catch(function(error) {
        console.log("error : ", error)
    });
}

