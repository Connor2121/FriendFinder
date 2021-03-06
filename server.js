var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.use(express.static(__dirname + '/public'));

var PORT = process.env.PORT || 3000;

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);
 
 

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  