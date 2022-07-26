// PACKAGE YANG DIGUNAKAN : 
// mongoose -> library untuk menghubungkan database mongodb ke nodejs
// nodemon -> library agar mempermudah kita dalam menjalankan server, jadi dengan menggunakan ini, sudah otomatis mereset ulang server jika ada perubahan data pada file javascript
// express -> framework nodejs yang memudahkan kita dalam hal codingan
// body-parser (jika tidak menggunakan express) pada proyek ini, menggunakan express, jadinya tidak perlu install body-parser

//Import express
const express = require('express')

//import mongoose
const mongoose = require('mongoose')

//insialisasi express jadi app
const app = express() 

//setup body parser 
const bodyParser = require('express') // karna body-parser sendiri terdapat didalam library express,, jadi sebenarnya tidak usah dibuat 2x, ini hanya contoh
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(bodyParser.json())

//Konek ke mongodb
mongoose.connect('mongodb://localhost/resthub')
const db = mongoose.connection

//setting port 
const port = 8000

//import module api route
const apiRouter = require('./api-routes')

//setup default URL di root 
app.get('/',(req,res)=> {
    res.send('Hello World, selamat anda telah berhasil membuat webserver dengan express dan menginstall package nodemon')
})

//api route ke url /api
app.use("/api",apiRouter)

//menjalankan aplikasi dengan info didalam log
app.listen(port,()=> {
    console.log(`server berjalan di port ${port}`);
})