const http = require('http')

const server = http.createServer(function (req,res){
    //menggunakan HTML text untuk membuat datanya 
    res.writeHead(200, {'Content-type' : 'text/html'})
    res.write('<h1>Hi</h1>, selamat <i>anda</i> berhasil membuat server dengan <b>NodeJS</b>')
    res.end() // untuk memberhentikan servernya agar tidak running terus.
})

server.listen(8000) //setting port untuk servernya

console.log('Server running at port : 8000');