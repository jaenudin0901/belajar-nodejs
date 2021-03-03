
// const cetakNama = (nama) => `Hi nama saya ${nama}`;
// console.log(cetakNama('Jaenudin'));
// const fs = require('fs'); //core moule
// const cetakNama =require('./coba'); //local module
// const moment = require('moment'); // third party module /npm module //node modules


// console.log(cetakNama('jaenudin'));console.log(cetakNama('jaenudin'));


const coba = require('./coba');

console.log(coba.cetakNama('jaenudin'), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());


