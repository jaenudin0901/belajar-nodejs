const fs = require('fs');
const chalk = require('chalk');
// const { require } = require('yargs');
const validator= require('validator');

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


const simpanContact = (nama, email, noHP) =>{

    const contact = { nama, email, noHP};
    
    const fileBuffer=fs.readFileSync('data/contacts.json', 'utf-8');

    const contacts = JSON.parse(fileBuffer);

    // cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama);

    if(duplikat){
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar silahkan gunakan yahng lain!'));
        return false
    }

    // cek email
    if(email){
        if(!validator.isEmail(email)){
             console.log(chalk.red.inverse.bold('Email tidka valid!'));
        return false

        }
    }
    // cek no hp
      if(!validator.isMobilePhone(noHP, 'id-ID')){
             console.log(chalk.red.inverse.bold('Nomer hp tidak valid!'));
        return false

        }

    contacts.push(contact);


    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log(chalk.green.inverse.bold('Terimakasih sudah memasukan data!'));
       
}

module.exports = { simpanContact};