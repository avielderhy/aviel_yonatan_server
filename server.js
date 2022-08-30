const express = require('express')
const app = express()
const isPalindrome = require('./isPalindrome.js')
const port = 5000

app.get('/Palindrome/:string', (req, res) => {
  res.status(200).send(isPalindrome.checkPalindrome(req.params.string))
})

app.listen(port, () => {
  console.log(`Our app listening on port ${port}`)
})

app.get('/helloWorld', function (req, res) {
  res.send('Hello World');
})


exports.stop = function () {
  server.close();
}
const server = app.listen(port, function () {
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});