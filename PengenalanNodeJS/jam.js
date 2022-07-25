const moment = require('moment')

console.log("Sekarang jam : " + moment().format('MMMM Do YYYY, h:mm:ss a')); // akan muncul seperti ini : July 25th 2022, 10:36:35 am

exports.lihatJam = function (){
    return ("Sekarang jam : " + moment().format('MMMM Do YYYY, h:mm:ss a'))
}