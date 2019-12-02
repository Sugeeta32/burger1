var orm = require('../config/orm.js');

var burger = {
    getAllBurgers: function (cb) {
        orm.getAllBurgersDBData('burgers', function (res) {
            cb(res);
        })
    },
    update: function (id, state, cb) {
        console.log('update in burger js id = ' + id);
        console.log('update in burger js state = ' + state);
        orm.update('burgers', id, state, function (res) {
            cb(res);
        })
    },
    create: function (burger_Name, burger_Id, cb) {
        orm.create('burgers', burger_Name, burger_Id, function (res) {
            cb(res);
        })
    },
    delete: function(id, cb){
        orm.delete('burgers',id,cb,function(res){
            cb(res);
        })
    }
}
module.exports = burger;