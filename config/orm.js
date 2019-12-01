// Import MySQL connection.
var dbConnection = require("./connection.js");

var orm = {
     getAllBurgersDBData: function(tableName, cb) {
        dbConnection.query('select * from ' + tableName +';', function(err,queryResult){
        if(err){
            console.log('orm error =' + err);
            throw err;
        } 
        // console.log('orm all successful ' + result);
        cb(queryResult);
    });
},

update: function(tableInput, condition, cb){
    dbConnection.query('UPDATE ' + tableInput +' SET devoured=true WHERE id = ' + condition +';' , function(err,queryResult){
        if(err){
            console.log('orm error =' + err);
            throw err;
        } 
        // console.log('orm all successful ' + result);
        cb(queryResult);
    });

}
    //var queryString
};
// Export the orm object for the model (burger.js).
module.exports = orm;