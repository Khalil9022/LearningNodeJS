//import siswa model
Siswa = require("./siswaModel")

// handle index action 
//menampilkan data pada saat mengakses ke collection siswa
exports.index = function(req,res){
    Siswa.get(function(err,siswa){
        if(err){
            res.json({
                status : "error : ",
                message : err
            })
        }

        res.json({
            status : "success",
            message : "siswa retrieved succes",
            data : siswa
        })
    })
}

// Handle create siswa 
exports.new = function(req,res){
    let siswa = new Siswa()
    siswa.nama = req.body.nama ? req.body.nama : siswa.nama
    // jika didalam req.body.name ada data, maka dia akan mengambil req.body.name, jika tidak, maka dia akan mengambil siswa name
    siswa.tanggallahir = req.body.tanggallahir
    siswa.jeniskelamin = req.body.jeniskelamin
    siswa.hobi = req.body.hobi

    siswa
        .save()
        .then((data)=> {
            res.json({
                Status : "Success",
                message : "New Siswa Created",
                Siswa : data
            })
        })
        .catch((err) => {
            res.status(500).send({
                message : err.message || "Internal server error"
            })
        })
}

//handle view siswa info 
exports.view = function(req,res){
    Siswa.findById(req.params.siswa_id, function(err,siswa){
         if(err){
            res.json({
                status : "error",
                message : err
            })
        }
        res.json({
            message : "siswa detail Loading....",
            data : siswa 
        })
    })
}