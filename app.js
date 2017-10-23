require('newrelic');

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
  console.log("hello");
  const err = new Error("bloody hell!");
  err.status = 500;
  next();
});

app.use((req, res, next) => {
  console.log('world');
  next();
});



app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) =>{
  res.locals.error = err;
  res.status(err.status);
  res.render('error', err);
});

app.listen(port, () =>{
  console.log('the application is running at localhost:' + port);
});
