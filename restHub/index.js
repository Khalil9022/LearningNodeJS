const express = require('express')
const app = express() //menginisialkan express menjadi app, jadi lebih simple
const port = 8000
const apiRouter = require('./api-routes')

app.get('/',(req,res)=> {
    res.send('Hello World, selamat anda telah berhasil membuat webserver dengan express')
})

app.use("/api",apiRouter)

app.listen(port,()=> {
    console.log(`server berjalan di port ${port}`);
})