var express = require('express');
var pg = require('pg');

var app = express.createServer(express.logger());

app.get('/api/count', function(request, response) {
  response.send({count:12});
});

pg.connect(process.env.DATABASE_URL, function(err, client) {
  var query = client.query('SELECT * FROM your_table');

  query.on('row', function(row) {
    console.log(JSON.stringify(row));
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});