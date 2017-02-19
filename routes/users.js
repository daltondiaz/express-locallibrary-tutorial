var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/catalog');
});

router.get('/cool',function(req,res,next){
  res.send('You are so cool!' )
})

module.exports = router;
