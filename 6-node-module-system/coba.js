// console.log('Hello World');

function cetakNama(nama) {
    return `Hello, nama saya ${nama}`;

}

const mahasiswa = {
    nama : 'Hendra Setiawan',
    umur : 32,
    cetakMhs() {

        return `Hi, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
    },
}

class Orang {
    constructor() {
        console.log(`Object orang telah dibuat!`);
    }
}

const PI = 3.14;


// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang, 
// };


module.exports = { cetakNama, PI, mahasiswa, Orang};