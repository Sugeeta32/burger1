 var express = require('express');
var router1 = express.Router();
var burger = require('../models/burger.js');
//console.log(burger);
 router1.get('/', function(req, res){
    // console.log(burgers_data);
     burger.getAllBurgers(function(burgers_data){
      console.log(burgers_data);
        res.render('index', {burgers_data}); 
     });
  
 });
 router1.put('/burgers/update', function(req,res){
   
   console.log(req.body);
   var id = req.body.burger_id;
   console.log('id--->' + id);
    burger.update(id, function(result){
       console.log(result);
       res.redirect('/')
    });
 });
 module.exports = router1;