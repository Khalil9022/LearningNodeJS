const mongoose = require('mongoose')

//setup schema (table)
const SiswaSchema = mongoose.Schema({
    nama : {
        type : String,
        required : true 
    },
    tanggallahir : {
        type : String,
        required : true 
    },
    jeniskelamin : {
        type : String,
    },
    hobi : {
        type : String
    },
    create_date : {
        type : Date,
        default : Date.now
    }
})

// Export Siswa model 
const Siswa = module.exports = mongoose.model('siswa',SiswaSchema)
module.exports.get = function(callback,limit){
    Siswa.find(callback).limit(limit)
}