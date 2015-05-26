var path = require('path')
var express = require('express')
var app = express()
var bodyparser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended: false})) //To parse x-www-form-urlencoded

app.post('/form', function(req, res){
  console.log(req.body)
  res.end(req.body.str.split('').reverse().join(''))
});

app.listen(process.argv[2] || 3000)
