const selamatPagi = require ('./selamatPagi')
const lihatJam = require ('./jam')

const Halo = selamatPagi.selamatPagi('nama Teman teman')
const jam = lihatJam.lihatJam()

console.log(Halo);
console.log(jam);