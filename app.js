const cors = require('cors'); // add at the top
app.use(cors()); // add after 'app' is created

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


app.get("/", function(req, res, next) {
    res.send("Access the API at path /api");
  });

app.use('/api', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
