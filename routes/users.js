var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var multer = require('multer');
var upload = multer({dest: './uploads'});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('register', {title:'Register'});
});

router.get('/login', function(req, res, next) {
  res.render('login', {title:'Login'});
});

router.post('/register', upload.single('profileimage'), function(req, res, next) {
  console.log(req.body.name);
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;

  if (req.file) {
    console.log('Uploading File...');
    var profileimage = req.file.filename;
  } else {
    console.log('No File Uploaded...')
    //var profileimage = 'noimage.jpg';
  }

  //Form Validator
  req.checkBody('name', 'Name field is required').notEmpty();
  req.checkBody('email', 'Email field is required').notEmpty();
  req.checkBody('email', 'Invalid Email').notEmpty();
  req.checkBody('username', 'Username field is required').notEmpty();
  req.checkBody('password', 'Password field is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  var errors = req.validationErrors();

  if (req.validationErrors()){
    console.log('Error !');
    res.render('register', {
      errors: errors
    });
  } else {
    console.log('No errors were encountered');
  }

});

module.exports = router;
