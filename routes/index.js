var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Программ*/
router.get('/programs', function(req, res, next) {
    res.send("<h1>Страница Программ</h1>")
});

module.exports = router;
