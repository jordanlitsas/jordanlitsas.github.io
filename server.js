var express = require("express");
var app = express();
var http = require('http');
var server = http.createServer(app);

const bodyParser = require('body-parser')




var port = 8080;



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.static(__dirname + '/'));


server.listen(port, () => {
  console.log('listening on ' + port);
});

