var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/chat', function(req, res, next){
  var name = req.query.name;
  res.render('chat', { name: name });
});

module.exports = router;
