//import express routes
const express = require('express')
const router = express.Router()

router.get('/',(req,res)=> {
    res.json({
        status : "API its working",
        message : "welcome to RestHub Backend APP"
    })
})

//Request CREATE
router.post('/',(req,res)=> {
    res.send('Request Create masuk')
})

//Request UPDATE
router.put('/',(req,res)=> {
    res.send('Request Update masuk')
})

//Request DELETE
router.delete('/',(req,res)=> {
    res.send('Request Delete masuk')
})

module.exports = router