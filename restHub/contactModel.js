//contactModel.js
const mongoose = require('mongoose')

//setup schema (table)
const ContactSchema = mongoose.Schema({
    name : {
        type : String,
        required : true 
    },
    gender : {
        type : String
    },
    email : {
        type : String,
        required : true 
    },
    phone : {
        type : String
    },
    create_date : {
        type : Date,
        default : Date.now
    }
})

// Export Contact model 
const Contact = module.exports = mongoose.model('contact',ContactSchema)
module.exports.get = function(callback,limit){
    Contact.find(callback).limit(limit)
}
