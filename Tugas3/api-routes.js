const express = require('express')
const router = express.Router()

router.get('/',(req,res)=> {
    res.json({
        status : "API berjalan....",
        message : "Welcome to Resthub Backend"
    })
})

const siswaController = require('./siswaController')

router.route('/siswa')
    .get(siswaController.index)
    .post(siswaController.new)

router.route('/siswa/:siswa_id')
    .get(siswaController.view)
    .patch(siswaController.update)
    .put(siswaController.update)

module.exports = router