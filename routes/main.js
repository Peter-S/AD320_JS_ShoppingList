var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', { title: 'Main',
	  newTask: req.query.newTask,
      quantity: req.query.quantity,
					   });
});

module.exports = router;
