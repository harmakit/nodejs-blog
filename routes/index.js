var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    if(req.isAuthenticated()){
    res.render('indexAuth')
  }else{
    res.render('index')
  }
});
module.exports = router;
