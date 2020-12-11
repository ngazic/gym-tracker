const path = require("path");
var express = require("express");
var cors = require("cors");
var app = express();
var router = require('./routes/index.js');

require("dotenv").config();

const port = process.env.PORT || 3000;

//Set middlewares
app.use(cors());
app.use(express.json());


//Use routers
app.use(router);

//===========Set app properties=================

app.set("title", "Gym Tracker");
app.set('port', port);

//view engine setup
app.set('views',path.join(__dirname,'views'));
// app.set('views', './views') // specify the views directory
app.set('view engine', 'pug') // register the template engine


module.exports = app;
