var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var bodyParser = require('body-parser')
var app = require('express')

/* GET home page. */
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'shopping'
});

//var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.get('/submit',function(req,res){
res.render('index');
});
app.post('/submit',urlencodedParser, function(req, res, next) {
    console.log(req.body.item);
    console.log(req.body.quantity);
     connection.connect(function(err) {
  if (err) throw  err;
  console.log("connected");
  var sql = "INSERT INTO shopping_list (Item, Quantity) VALUES ('"+req.body.item+"','"+req.body.quantity+"')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });
});

  res.render('index', { title: 'Express' });
});



/*
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    item: req.query.item,
    quantity: req.query.quantity  });
});
*/

module.exports = router;