//  CARA KEDUA


// COre Module
// File System
const fs = require('fs');
// const { rejects } = require('node:assert');
// const { resolve } = require('node:path');

// menuliskan string ke file (syncronous)

// try{
// fs.writeFileSync('data/test.txt', 'Hello World Secara Syncronous');

// } catch(e) {
//     console.log(e);
// }

// menuliskan string ke file (asyncronous)
// fs.writeFile('data/test.txt','Hellp World secara asyncronous', (e) => {
//     console.log(e);
// });


// membaca secara asyncronous
// const data = fs.readFileSync('data/test.txt');
// console.log(data.toString());
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);


// membaca isi file(asyncronous);
// fs.readFile('datas/test.txt','utf-8',(err, data)=>{
//     if(err) throw err;
//     console.log(data);
// });



// Readline 
const Readline = require('readline');
const rl = Readline.createInterface({
    input:process.stdin,
    output: process.stdout,
});

// membuat folder data jika belum ada
const dirPath = './data';
if(!fs.existsSync('./data')) {
    fs.mkdirSync(dirPath);
};

// membuat file contact.json jika belum ada 
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
};

const pertanyaan1 = () => {
    return new Promise((resolve, rejects) => {
        rl.question('Masukan Nama anda : ', (nama) => {
        resolve(nama);
        });
    });
};

const pertanyaan2 = () => {
    return new Promise((resolve, rejects) => {
        rl.question('Masukan email anda : ', (email) => {
        resolve(email);
        });
    });
};

const main = async() => {
    const nama = await pertanyaan1();
    const email = await pertanyaan2();

    const contact = { nama, email};
    
    const fileBuffer=fs.readFileSync('data/contacts.json', 'utf-8');

    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);


    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log('Terimakasih sudah memasukan data!')
        rl.close();

};
main();



// rl.question('Masukan nama anda: ',(nama) => {
//    rl.question('Masukan No HP anda:',(noHP)=>{
         
//     const contact = { nama, noHP };
//     const file =fs.readFileSync('data/contacts.json', 'utf-8');

//     const contacts = JSON.parse(file);
//     contacts.push(contact);

//     console.log(contact);

//     fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

//     console.log('Terimakasih sudah memasukan data!')
//         rl.close();
//    });
// });











// CARA KETIGA