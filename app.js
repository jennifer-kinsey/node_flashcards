const express = require('express');
const app = express();


app.set('view engine', 'pug');

app.get('/', (req, res) =>{
  res.render('index');
});

app.get('/cards', (req, res) =>{
  res.render('card', { prompt: "Who's buried in Grant's tomb?", hint: "Think of whose tomb it is."});
});

app.listen(3000, () =>{
  console.log('the application is running at localhost:3000');
});
