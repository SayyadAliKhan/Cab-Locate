const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/carservice');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api', routes);

app.use(function(err, req, res, next){
  res.status(422).send({error: err.message});
});

app.listen(process.env.port || 3000, function(){
  console.log("now listening for request");
});
