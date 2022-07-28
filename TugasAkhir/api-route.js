//api-routes.js

//import express routes
const express = require('express')
const router = express.Router()

//set default api respone
router.get('/',(req,res)=> {
    res.json({
        status : "API its working",
        message : "welcome to RestHub Mahasiswa Backend APP"
    })
})

//import contact controller 
const mahasiswaController = require('./mahasiswaController')

//Contact Routes 
router.route('/mahasiswa') 
.get(mahasiswaController.index)
.post(mahasiswaController.new)

router.route('/mahasiswa/:mahasiswa_id')
.get(mahasiswaController.view)
.patch(mahasiswaController.update)
.put(mahasiswaController.update)
.delete(mahasiswaController.delete)

//export API routes
module.exports = router