const express = require('express')
const app = express() //menginisialkan express menjadi app, jadi lebih simple
const port = 8000

app.get('/',(req,res)=> {
    res.send('Hello World, selamat anda telah berhasil membuat webserver dengan express')
})

app.get('/user',(req,res)=> {
    res.send('Request Read masuk')
})

//Request CREATE
app.post('/user',(req,res)=> {
    res.send('Request Create masuk')
})

//Request UPDATE
app.put('/user',(req,res)=> {
    res.send('Request Update masuk')
})

//Request DELETE
app.delete('/user',(req,res)=> {
    res.send('Request Delete masuk')
})

app.listen(port,()=> {
    console.log(`server berjalan di port ${port}`);
})