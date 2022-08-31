const express = require('express')
const app = express()
const isPalindrome = require('./isPalindrome.js')
const port = 5000


app.listen(port, () => {
  console.log(`Our app listening on port ${port}`)
})

app.get('/helloWorld', function (req, res) {
  res.send('Hello World');
})

app.get('/isPalindrome/:string', (req, res) => {
  res.status(200).send(isPalindrome.checkPalindrome(req.params.string))
})

exports.stop = function () {
  server.close();
}
