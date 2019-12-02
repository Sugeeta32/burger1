// Import MySQL connection.
var dbConnection = require("./connection.js");

var orm = {
    getAllBurgersDBData: function (tableName, cb) {
        dbConnection.query('select * from ' + tableName + ';', function (err, queryResult) {
            if (err) {
                console.log('orm error =' + err);
                throw err;
            }
            // console.log('orm all successful ' + result);
            cb(queryResult);
        });
    },

    update: function (tableInput, condition, state, cb) {
        dbConnection.query('UPDATE ' + tableInput + ' SET devoured= ' + state + ' WHERE id = ' + condition + ';', function (err, queryResult) {
            if (err) {
                console.log('orm error =' + err);
                throw err;
            }
            // console.log('orm all successful ' + result);
            cb(queryResult);
        });

    },

    create: function (tableInput, burgerName, burgerId, cb) {
        //INSERT INTO `burgers_db`.`burgers` (`id`, `burger_name`, `devoured`) VALUES ('4', 'PANEER', '0');
        dbConnection.query('INSERT INTO ' + tableInput + ' SET ?',
            {
                id: burgerId,
                burger_name: burgerName,
                devoured: false
            },
            function (err, queryResult) {
                if (err) {
                    console.log('orm error =' + err);
                    throw err;
                }
                // console.log('orm all successful ' + result);
                cb(queryResult);
            });
    },
    delete: function(tableInput, id, cb){
        dbConnection.query('DELETE FROM '+tableInput+' WHERE id= '+id+';', function(err,result){
            if(err) throw err;
            cb(result);
        });
    }
};
// Export the orm object for the model (burger.js).
module.exports = orm;