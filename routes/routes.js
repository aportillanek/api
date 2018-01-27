var express = require('express');
var router = express.Router();
let controllers=require('../controllers');
/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/
router.post('/index',controllers.AccesoController.Index);
router.post('/registrar',controllers.AccesoController.Registrar);
router.post('/login',controllers.AccesoController.Login);
module.exports=router;
