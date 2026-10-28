var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Программ*/
router.get('/pr_pro', function(req, res, next) {
    res.render('program', {
        title: "Premier pro",
        picture: "images/pro.png",
        desc: "Профессиональная програрамма для монтажа видео."
    });
});

module.exports = router;
