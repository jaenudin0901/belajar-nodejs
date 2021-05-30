const express = require('express')
const expressLayouts = require('express-ejs-layouts');
var morgan = require('morgan');
const app = express();
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs');
// thhrid part middleware
app.use(expressLayouts);
app.use(morgan('dev'));

// Built -in Midd;ewarware
app.use(express.static('public'));

// Application level middleware
app.use((req, res, next) =>{
  console.log('Time: ', Date.now());
  next();
})


app.get('/', (req, res) => {
  // res.sendFile('./index.html', { root: __dirname })
  const mahasiswa = [
    {
    nama:'jaenudin',
    email:'jaenudin090191@gmail.com',
   },
    {
    nama:'hendra',
    email:'hendra1@gmail.com',
   },
    {
    nama:'Rudi',
    email:'rudi@gmail.com',
   }
  ];

  res.render('index', {
    nama : 'Jaenudin', 
    title:'Halaman Home',
    mahasiswa,
    layout: 'layouts/main-layout',



});

});

app.get('/about', (req, res) => {
 res.render('about', {
     layout: 'layouts/main-layout',
    title: 'ini halaman about'});

})
app.get('/contact', (req, res) => {
  res.render('contact', {
    layout: 'layouts/main-layout',
    title: 'ini halaman contact'});

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



