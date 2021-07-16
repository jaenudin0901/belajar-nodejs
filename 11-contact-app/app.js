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
        // const contact = {
        //     nama: argv.nama,
        //     email: argv.email,
        //     noHP: argv.noHP,
        // };
        // console.log(contact);

    },
});

yargs.parse();






























// const contacts = require('./contacts');


// const main = async() => {
//     const nama = await contacts.tulisPertanyaan( 'Masukan nama anda :');
//     const email = await contacts.tulisPertanyaan('Masukan email anda :');
//     const noHP = await contacts.tulisPertanyaan('Masukan no HP anda :');

//    contacts.simpanContact(nama, email, noHP);

// };


// main();


