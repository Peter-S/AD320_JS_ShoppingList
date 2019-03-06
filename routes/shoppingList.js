var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shoppingList', { 
      title: 'Shopping List' ,
        });
});

router.post('/', function(req, res, next) {
    console.dir(req.body);
  res.render('shoppingList', {
      name:req.body.username,
      title: 'Shopping List' ,
      
        });
});

module.exports = router;