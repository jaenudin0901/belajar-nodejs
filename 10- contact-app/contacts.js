const fs = require('fs');

// Readline 
const Readline = require('readline');
const rl = Readline.createInterface({
    input: process.stdin,
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

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, rejects) => {
        rl.question(pertanyaan, (nama) => {
        resolve(nama);
        });
    });
};




const simpanContact = (nama, email, noHP) =>{

    const contact = { nama, email, noHP};
    
    const fileBuffer=fs.readFileSync('data/contacts.json', 'utf-8');

    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);


    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log('Terimakasih sudah memasukan data!')
        rl.close();
}



module.exports = {tulisPertanyaan, simpanContact};