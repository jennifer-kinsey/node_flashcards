const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) =>{
  res.render('index');
});

app.get('/cats', (req, res) =>{
  res.send('<h1>Cats are teh best</h1>');
});

app.listen(3000, () =>{
  console.log('the application is running at localhost:3000');
});
