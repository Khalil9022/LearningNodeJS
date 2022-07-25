const http = require('http')

const server = http.createServer(function (req,res){
    res.end('Hi, selamat anda berhasil membuat server dengan node js :D')
})

server.listen(8000) //setting port untuk servernya

console.log('Server running at port : 8000');