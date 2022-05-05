var express = require('express');
var router = express.Router();

/* GET new submission. */
router.get('/', function(req, res, next) {
  res.render('form', {title:""})
});

module.exports = router;
