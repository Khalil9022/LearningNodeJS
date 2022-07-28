Mahasiswa = require('./mahasiswaModel')

exports.index = function(req,res){
    Mahasiswa.get(function(err,mahasiswa){
        if (err){
            res.json({
                status : "error!",
                message : err
            })
        }

        res.json({
            status : "success",
            message : "Data mahasiswa berhasil didapatkan",
            Data : mahasiswa
        })
    })
}

exports.new = function(req,res){
    let mahasiswa = new Mahasiswa()
    mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim
    mahasiswa.nama = req.body.nama
    mahasiswa.jurusan = req.body.jurusan
    mahasiswa.semester = req.body.semester

    mahasiswa
        .save()
        .then((data)=> {
            res.json({
                Status : "Success",
                message : "New mahasiswa Created",
                mahasiswa : data
            })
        })
        .catch((err) => {
            res.status(500).send({
                message : err.message || "Internal server error"
            })
        })
}

//handle view mahasiswa info 
exports.view = function(req,res){
    Mahasiswa.findById(req.params.mahasiswa_id, function(err,mahasiswa){
         if(err){
            res.json({
                status : "error",
                message : "ID not found"
            })
        }
        res.json({
            message : "mahasiswa detail Loading....",
            data : mahasiswa 
        })
    })
}

//handle update mahasiswa info
exports.update = function(req,res){
Mahasiswa.findById(req.params.mahasiswa_id, function(err,mahasiswa){
         if(err){
            res.json({
                status : "error",
                message : "ID not Found"
            })
        }
        mahasiswa.nim = req.body.nim 
        mahasiswa.nama = req.body.nama
        mahasiswa.jurusan = req.body.jurusan
        mahasiswa.semester = req.body.semester

        mahasiswa
            .save()
            .then((data)=> {
                res.json({
                    Status : "Success",
                    message : "Update mahasiswa! ",
                    Mahasiswa : data
                })
            })
            .catch((err) => {
                res.status(500).send({
                    message : err.message || "Internal server error"
                })
            })
    })
}

exports.delete = function (req,res) {
    Mahasiswa.remove({
        _id : req.params.mahasiswa_id
    },function (err,mahasiswa){
        if(err){
            res.send(err)
        }
        res.json({
            Status : "Success",
            message : "delete mahasiswa Succes"
        })
    })
}