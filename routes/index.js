var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/signin', function(req, res, next) {
  res.render('signin');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});
router.post('/contactdetails', function(req, res, next) {
  res.render('Details',{user:req.body});
});
router.post('/signInUp', function(req, res, next) {
  res.render('Singing',{person:req.body});
});
module.exports = router;
