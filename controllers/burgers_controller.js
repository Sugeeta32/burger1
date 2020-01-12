var express = require('express');
var router1 = express.Router();
var burger = require('../models/burger.js');
var nextId;
//console.log(burger);
router1.get('/', function (req, res) {
    console.log('********************************');
   burger.getAllBurgers(function (burgers_data) {
      console.log(burgers_data.length);
      //recCount = burgers_data.length;
     // if(burgers_data.length >0 ){
         res.render('index', { burgers_data });
      //}
      
   });

});
router1.put('/burgers/update/devour', function (req, res) {
   console.log('/burgers/update/devour');
   var id = req.body.burger_id;
   console.log('id--->' + id);
   burger.update(id, true, function (result) {
      //console.log(result);
      res.redirect('/')
   });
});

router1.put('/burgers/update/serve', function (req, res) {
   console.log('serve put api called');
   console.log('/burgers/update/serve');
   var id = req.body.burger_serve_id;
   console.log('id--->' + id);
   burger.update(id, false, function (result) {
      res.redirect('/')
   });
});
router1.post('/burgers/create', function (req, res) {
   var name = req.body.newBurger;
   var id = nextId;
   console.log(name);
   burger.create(name, id, function (result) {
      res.redirect('/')
   });
});
router1.post('/burgers/delete', function(req,res){
   console.log('in delete');
   var id = req.body.deleteBurger_id;
   console.log('delete id--->' + id);
   burger.delete(id, function(result){
      res.redirect('/')
   });
});

module.exports = router1;