import * as express from "express";
import * as mongoose from "mongoose";
import * as path from "path";

// Constants
const port = 8080;

// App
const app = express();

// provide paths to static files
app.use("/js", express.static(__dirname + '/public/js'));
app.use("/views", express.static(__dirname + '/views'));

// view engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

let Data;
app.get('/', (req, res) => {
  Data.findOne((err, data) => {
    res.render('index', {title: "Course Planner", text: data.text});
  })
});

const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Webapp listening at http://%s:%s", host, port)
});


if (mongoose.connection.readyState === 0) {
  /* 0 = disconnected, 1 = connected,  2 = connecting,  3 = disconnecting  */
  mongoose.connect('mongodb://mongodb:27017/db');
  mongoose.connection.on('connected', () => {
    log("Connection to MongoDB established.");
    Data = mongoose.model('Data',
        new mongoose.Schema({text: String}),
        'data');     // collection name
  });
}

function log(message:any) {
  const date = new Date();
  const time = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
  console.log(time + " - ",message);
}