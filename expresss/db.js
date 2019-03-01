var db = require('mysql');
var dbcon = require('../dbcon.json');
var connection= db.createconnection(dbcon);

module.exports = conneciton;
