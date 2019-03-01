var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var bodyParser = require('body-parser')
var app = require('express')
var db = require('../db');

/* GET home page. */
/*var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'shopping'
});
  connection.connect(function(err) {
  if (err) throw  err;
  //console.log("connected");
      */ 
      router.post('/', function(req, res, next) { 
           var sql = "INSERT INTO shopping_list  VALUES ('"+req.body.item+"',"+req.body.quantity+")";
          db.query(sql, function(err) {
                           if (err) throw err;
             res.send('index');
              console.log('inserted');
                })
                        
    
      });



module.exports = router; 