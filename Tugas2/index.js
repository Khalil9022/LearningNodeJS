const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('express')

app.use(bodyParser.urlencoded({
    extended : true
}))
app.use (bodyParser.json())

mongoose.connect('mongodb://localhost/resthub')
const db = mongoose.connection

const port = 8000

const apiRouter = require("./api-routes")

app.get('/',(req,res)=>{
    res.send("Berhasil masuk kedalam server localhost!")
})

app.use("/api",apiRouter)

app.listen(port, ()=>{
    console.log(`Server berjalan pada localhost:${port}`);
})