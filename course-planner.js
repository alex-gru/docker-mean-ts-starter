"use strict";
exports.__esModule = true;
var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
// Constants
var port = 8080;
// App
var app = express();
// provide paths to static files
app.use("/js", express.static(__dirname + '/public/js'));
app.use("/views", express.static(__dirname + '/views'));
// view engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
var Data;
app.get('/', function (req, res) {
    Data.findOne(function (err, data) {
        res.render('index', { title: "Course Planner", text: data.text });
    });
});
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Webapp listening at http://%s:%s", host, port);
});
if (mongoose.connection.readyState === 0) {
    /* 0 = disconnected, 1 = connected,  2 = connecting,  3 = disconnecting  */
    mongoose.connect('mongodb://localhost:27017/db');
    mongoose.connection.on('connected', function () {
        log("Connection to MongoDB established.");
        Data = mongoose.model('Data', new mongoose.Schema({ text: String }), 'data'); // collection name
    });
}
function log(message) {
    var date = new Date();
    var time = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
    console.log(time + " - ", message);
}
