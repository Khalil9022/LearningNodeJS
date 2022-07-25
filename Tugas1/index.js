const express = require("express")
const app = express()
const port = 8000
const apiRouter = require('./api-routes')

app.get('/',(req,res)=>{
    res.send('Sudah berhasil terhubung ke webserver menggunakan express Framework')
})

app.use("/dataSiswa",apiRouter)

app.listen(port, ()=>{
    console.log(`Server berjalan di port : ${port}`);
})