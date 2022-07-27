//import contact model
Contact = require("./contactModel")

// handle index action 
//menampilkan data pada saat mengakses ke collection contact
exports.index = function(req,res){
    Contact.get(function(err,contact){
        if(err){
            res.json({
                status : "error : ",
                message : err
            })
        }

        res.json({
            status : "success",
            message : "Contact retrieved succes",
            data : contact
        })
    })
}

// Handle create contact 
exports.new = function(req,res){
    let contact = new Contact()
    contact.name = req.body.name ? req.body.name : contact.name 
    // jika didalam req.body.name ada data, maka dia akan mengambil req.body.name, jika tidak, maka dia akan mengambil contact name
    contact.gender = req.body.gender
    contact.email = req.body.email
    contact.phone = req.body.phone

    contact
        .save()
        .then((data)=> {
            res.json({
                Status : "Success",
                message : "New Contact Created",
                Contact : data
            })
        })
        .catch((err) => {
            res.status(500).send({
                message : err.message || "Internal server error"
            })
        })
}

//handle view contact info 
exports.view = function(req,res){
    Contact.findById(req.params.contact_id, function(err,contact){
         if(err){
            res.json({
                status : "error",
                message : "ID not found"
            })
        }
        res.json({
            message : "contact detail Loading....",
            data : contact 
        })
    })
}

//handle update contact info
exports.update = function(req,res){
Contact.findById(req.params.contact_id, function(err,contact){
         if(err){
            res.json({
                status : "error",
                message : "ID not Found"
            })
        }
        contact.name = req.body.name
        contact.gender = req.body.gender
        contact.email = req.body.email
        contact.phone = req.body.phone

        contact
            .save()
            .then((data)=> {
                res.json({
                    Status : "Success",
                    message : "Update Contact! ",
                    Contact : data
                })
            })
            .catch((err) => {
                res.status(500).send({
                    message : err.message || "Internal server error"
                })
            })
    })
}

//handle delete contact info
exports.delete = function (req,res) {
    Contact.remove({
        _id : req.params.contact_id
    },function (err,contact){
        if(err){
            res.send(err)
        }
        res.json({
            Status : "Success",
            message : "delete Contact Succes"
        })
    })

    
}