'use strict';

const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
const pug = require('pug');

// Constants
const PORT = 8080;

// App
const app = express();

// provide paths to static files
app.use("/js", express.static(__dirname + '/public/js'));
app.use("/views", express.static(__dirname + '/views'));

// view engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
  Data.findOne(function (err, data) {
    res.render('index', {title: "Course Planner", text: data.text});
  })
});

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  log("Webapp listening at http://%s:%s", host, port)
});


var Data;
if (mongoose.connection.readyState === 0) {
  /* 0 = disconnected, 1 = connected,  2 = connecting,  3 = disconnecting  */
  mongoose.connect('mongodb://localhost:27017/db');
  mongoose.connection.on('connected', function () {
    log("Connection to MongoDB established.");
    Data = mongoose.model('Data',
        new mongoose.Schema({ text: String}),
        'data');     // collection name
  });
}

function log(object) {
  var date = new Date();
  var time = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
  console.log(time + " - ", object);
}