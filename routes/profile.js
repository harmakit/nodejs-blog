var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    if(req.isAuthenticated()){
    res.render('profile')
  }else{
    res.redirect('/')
  }
});

module.exports = router;
