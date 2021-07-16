// const { require } = require("yargs");
const yargs =require("yargs");
const contacts = require('./contacts');



yargs.command({
    command:  'add',
    describe:'Menambahkan contact baru!',
    builder:{
        nama:{
            describe: 'Nama lengkap',
            demandOption:'true',
            type:'string',
        },
         email:{
            describe: 'Email',
            demandOption:'false',
            type:'string',
        },
        noHP:{
            describe: 'Nama lengkap',
            demandOption:'true',
            type:'string',
        },
    },

    handler(argv){

       contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    

    },
});

    // .demandCommand();

    // menampilkan daftar semua nama & noHPcontact
yargs.command({
    command:  'list',
    describe:'Menambahkan contact baru!',
 
    handler(){
        contacts.listContact();
    },
});

// menampilkan detail sebuah kontak

yargs.command({
    command:  'Detail',
    describe:'Menampilkan detail sebuah contact berdasarkan nama!',
    builder: {
    nama:{
        describe:'Nama lengkap',
        demandOption: true,
        type: 'string',
    },
    },
 
    handler(argv){
        contacts.detailContact(argv.nama);
    },
})

// menghapus data berdasarkan nama
yargs.command({
    command:  'Delete',
    describe:'Menghapus  sebuah contact berdasarkan nama!',
    builder: {
    nama:{
        describe:'Nama lengkap',
        demandOption: true,
        type: 'string',
    },
    },
 
    handler(argv){
        contacts.deleteContact(argv.nama);
    },
})


yargs.parse();






























// const contacts = require('./contacts');


// const main = async() => {
//     const nama = await contacts.tulisPertanyaan( 'Masukan nama anda :');
//     const email = await contacts.tulisPertanyaan('Masukan email anda :');
//     const noHP = await contacts.tulisPertanyaan('Masukan no HP anda :');

//    contacts.simpanContact(nama, email, noHP);

// };


// main();


