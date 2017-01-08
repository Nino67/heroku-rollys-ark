var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: "Rolly's Ark" });
});

router.get('/animals', function(req, res, next) {
  res.render('animals', { title: "Rolly's Ark" });
});

router.get('/bulldog', function(req, res, next) {
  res.render('bulldog', { title: "Rolly's Ark" });
});

router.get('/gorilla', function(req, res, next) {
  res.render('gorilla', { title: "Rolly's Ark" });
});

router.get('/faqs', function(req, res, next) {
  res.render('faqs', { title: "Rolly's Ark" });
});

router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: "Rolly's Ark" });
});


module.exports = router;
