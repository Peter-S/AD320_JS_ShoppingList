var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shoppingList', { 
      title: 'Shopping List' ,
      newTask: req.query.newTask,
      quantity: req.query.quantity,
      
        });
});

module.exports = router;