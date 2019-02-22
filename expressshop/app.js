/*
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var deleterouter = require('./routes/delete');
var updaterouter = require('./routes/update');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/delete', deleterouter);
app.use('/update', updaterouter);
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
*/
var express = require('express');
var path = require('path');
var app = express();
var mysql = require('mysql')

app.get('/', function(req,res){
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'shopping'
});

connection.connect(connection, function (err) {
    
        if (err) console.log(err);
 
               connection.query('select * from shopping_list', function (err, recordset) {
            
            if (err) console.log(err) 
                  // console.log(recordset)

             res.send(recordset);
            
        });
    });
});

var server = app.listen(3000, function () {
   console.log('Server is running 3000..');
});

