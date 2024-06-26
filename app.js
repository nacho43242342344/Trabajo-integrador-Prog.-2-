var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session =require("express-session")
const db = require("./database/models")

var stockRouter = require('./routes/stock');
var usersRouter = require('./routes/users');
let mainRouter = require('./routes/main');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session( 
  { 
    secret: "Nuestro mensaje secreto",
    resave: false,
    saveUninitialized: true
  }
));

app.use(function(req, res, next){
  //console.log("estamos en session midelware")
  if(req.session.user != undefined){
    res.locals.user = req.session.user;
    return next();
  } 
  return next();  
})

app.use(function(req, res, next){

  if(req.cookies.userId != undefined && req.session.user == undefined){
    let idDeLaCookie = req.cookies.userId;

    db.User.findByPk(idDeLaCookie)
    .then(user => {
      req.session.user = user;
      res.locals.user = user;
      return next()
    })
    .catch(error => {
      console.log(error);
    })
  } else {
    return next()
  }
});

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', mainRouter);
app.use('/stock', stockRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
