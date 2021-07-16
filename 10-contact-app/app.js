const contacts = require('./contacts');


const main = async() => {
    const nama = await contacts.tulisPertanyaan( 'Masukan nama anda :');
    const email = await contacts.tulisPertanyaan('Masukan email anda :');
    const noHP = await contacts.tulisPertanyaan('Masukan no HP anda :');

   contacts.simpanContact(nama, email, noHP);

};

// const {tulisPertanyaan, simpanContact} = require('./contacts');


// const main = async() => {
//     const nama = await tulisPertanyaan( 'Masukan nama anda :');
//     const email = await tulisPertanyaan('Masukan email anda :');
//     const noHP = await tulisPertanyaan('Masukan no HP anda :');

//    simpanContact(nama, email, noHP);

// };

main();


