var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');




var indexRouter = require('./routes/index');
var skillsRouter = require('./routes/skills'); //imports skills.js from routes folder

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); //tells res.render where to look for our view files
app.set('view engine', 'ejs');


app.use(function(req, res, next){
  console.log("it's working")
  req.time = new Date().toLocaleDateString()
  next();
})

app.use(methodOverride("_method"))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/skills', skillsRouter); //prepends every route in the skillsRouter with /skills

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
