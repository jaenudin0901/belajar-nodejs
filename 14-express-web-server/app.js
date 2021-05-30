const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname })

})

app.get('/about', (req, res) => {
  // res.send('Ini adalah halaman about')
  // res.json({
  //   nama: 'Jaenudin',
  //   email: 'jaenudin@gmail.com',
  //   noHP: '0843135788',
  // })
  res.sendFile('./about.html', { root: __dirname })
})
app.get('/contact', (req, res) => {
  // res.send('Ini adalah halaman contact')
  res.sendFile('./contact.html', { root: __dirname })

})

app.get('/product/:id/', (req, res) => {
  res.send(`Product ID :  ${ req.params.id} <br> Category ${req.query.category}`);
})
app.use('/',(req, res)=>{
  res.status(404);
  res.send('<h1>404</h1>');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});



// const http = require('http');
// // const { fs} = require('node:fs');
// const fs = require('fs');
// const port =3000;

// http
//     .createServer((req, res) => {
        
//         res.writeHead(200, {
//             'Content-Type' : 'text/html',
//         })
//         const url = req.url;

//         if(url=== '/about'){
//             res.write('<h1> Ini halaman about</h1>');
//             res.end();
//         } else if(url ==='/contact'){
//             res.write('<h1>Ini adalah halaman contact</h1>');
//             res.end();
//         } else{    
//             // res.write('Hello World');
//             fs.readFile('./index.html',(err, data) =>{
//                 if(err){
//                     res.writeHead(404);
//                     res.write('Error: file  not found');
//                 } else {
//                     res.write(data);
//                 }
//                 res.end();
//             })

//         }
//     })
//     .listen(port, () => {
//         console.log(`Server is Listening on port ${port}...`);
//     });