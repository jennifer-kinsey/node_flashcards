const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.set('view engine', 'pug');

app.get('/', (req, res) =>{
  res.render('index');
});

app.get('/cards', (req, res) =>{
  res.render('card', { prompt: "Who's buried in Grant's tomb?", hint: "Think of whose tomb it is."});
});

app.get('/hello', (req, res) => {
  res.render('hello');
});

app.post('/hello', (req, res) =>{
  console.dir(req.body);
  res.render('hello');
})

app.listen(3000, () =>{
  console.log('the application is running at localhost:3000');
});
