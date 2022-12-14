var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connection = require('./config/connect');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const EmailRouter = require('./routes/email')
const ContactRouter = require("./routes/contact")
const cors = require("cors")
require("dotenv").config()
var app = express();
const PORT = process.env.PORT
// console.log(PORT)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/email',EmailRouter)
app.use('/contact',ContactRouter)

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


// app.listen(8080,async()=>{
//   await connection()
//     console.log(`http://localhost:8080`)
// })
app.listen(PORT,async()=>{
  await connection()
    console.log(`http://localhost:${PORT}`)
})

module.exports = app;
