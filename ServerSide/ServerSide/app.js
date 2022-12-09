var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressLayout= require('express-ejs-layouts')
var productRouter = require('./routes/API/product');
const userAuth = require('./routes/userAuth')
//const userRouter = require('./routes/user')
const mongoose = require('mongoose');


var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressLayout);
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/products', productRouter);
app.use('/user', userAuth);

app.get('signin',(req,res)=>{
  res.render('Login')
})
app.get('/home',(req,res)=>{
  res.render('home')
})
//app.use('/', userRouter);

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

mongoose.connect("mongodb://127.0.0.1/Project").then(() => console.log("Connected to MongoDB..."))

module.exports = app;
