var express = require('express')
var app = express()

app.get('/home', function(req, res) {
  res.end('Hello World!')
})

app.listen(process.argv[2])

console.log('App running in port ' + process.argv[2])
