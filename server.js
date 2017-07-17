var express = require("express");
var bodyParser = require("body-parser");
var app = express();


var urlApi = "http://localhost:8888";

module.exports = app;

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());

app.use(express.static(__dirname + "/ressources"));

app.set("view engine", "ejs"); // set up ejs for templating

require("./routes")(app, urlApi);

var port = process.env.PORT || 8888;

var server = app.listen(port, function () {
    console.log("Server started port 8888...");
});

