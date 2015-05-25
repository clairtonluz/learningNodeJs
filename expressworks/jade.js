var path = require('path')
var express = require('express')
var app = express()

app.set('views', process.argv[3] || path.join(__dirname, 'templates'))
app.set('view engine', 'jade')

app.get('/home', function(req, res){
  res.render('index', {date:new Date().toDateString()})
})
var port = process.argv[2] || 3000
app.listen(port);

console.log('Server running in port ' + port)
