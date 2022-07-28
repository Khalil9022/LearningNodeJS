const express = require("express")
const app = express()
const bodyParser = express

const mongoose = require("mongoose")

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/resthub")
const db = mongoose.connection

const port = 8000

const apiRouter = require('./api-route')

app.get('/',(req,res)=> {
    res.send('Selamat telah berhasil masuk kedalam server API')
})

app.use('/api',apiRouter)

app.listen(port, () => {
    console.log(`server berjalan di port ${port}`);
})