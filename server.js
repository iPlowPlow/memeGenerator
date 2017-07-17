var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var listImg = [];
var fs = require("fs");

fs.readdir('./ressources/images/', function (err, files) {
    if (err) {
        throw err;
    }

    files.forEach(function (file) {
        fs.stat('./ressources/images/' + file, function (err, stats) {
            if (err) {
                throw err;
            }
            listImg.push(file);

        });
    });

})


module.exports = app;

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());

app.use(express.static(__dirname + "/ressources"));

app.set("view engine", "ejs"); // set up ejs for templating

require("./routes")(app, listImg);

var port = process.env.PORT || 8888;

var server = app.listen(port, function () {
    console.log("Server started port 8888...");
});

