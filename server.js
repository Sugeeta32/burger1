var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var app = express();
var PORT = process.env.PORT || 3000;
//require("dotenv").config();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(methodOverride('_method'));
app.engine("handlebars",
    exphbs({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");
// var mysql = require("mysql"); 

//console.log(process.env.PW);

app.listen(PORT,function(){
    console.log("listening on port number" + PORT);
});


var routes = require('./controllers/burgers_controller.js');
app.use(routes);

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));
// app.use(express.json());

