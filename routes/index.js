var express = require ('express');
var router = express.Router ();

var firstMiddleware = function(req,res,next){
  if(req.query.token == 'password'){
    next();
  }else {
    res.status(401).send({message : 'Autentication failed'});
  }
}

/*router.use(function(req,res,next){
  if(req.query.token == 'password'){
    next();
  }else {
    res.status(401).send({message : 'Autentication failed'});
  }
})*/

router.get ('/', firstMiddleware, function(req, res, next) {
  res.status(200).send({message : 'Autentication succeded'})
})

module.exports = router;
