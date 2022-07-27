//api-routes.js

//import express routes
const express = require('express')
const router = express.Router()

//set default api respone
router.get('/',(req,res)=> {
    res.json({
        status : "API its working",
        message : "welcome to RestHub Backend APP"
    })
})

//import contact controller 
const contactController = require('./contactController')

//Contact Routes 
router.route('/contacts') 
.get(contactController.index)
.post(contactController.new)

router.route('/contacts/:contact_id')
.get(contactController.view)
.patch(contactController.update)
.put(contactController.update)
.delete(contactController.delete)

//export API routes
module.exports = router