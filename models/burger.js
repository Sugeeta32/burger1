 var orm = require('../config/orm.js');

 var burger = {
    getAllBurgers: function(cb){
        orm.getAllBurgersDBData('burgers',function(res){
            cb(res);
        })
    },
    update: function(id, cb) {
        console.log('update in burger js id = ' + id);
        orm.update('burgers',id ,function(res){
            cb(res);
        })
    }
 }
module.exports = burger;