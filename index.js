var express = require('express');
var app = express();

app.use(express.static('css'));
app.use(express.static('images'));
app.use(express.static('pages'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Functional Prototype app listening at http://%s:%s', host, port);
});