
const express = require('express');
const app = express();
const port = 5000;
const helloWorld = require('./helloWorld.js');
const fs = require('fs');

app.get('/', function (req, res) {
  fs.readFile('index.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
})

app.get('/helloWorld', function (req, res) {
  res.status(200).send(helloWorld.helloWroldFunc());
})



exports.stop = function () {
  server.close();
}
const server = app.listen(port, function () {
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});