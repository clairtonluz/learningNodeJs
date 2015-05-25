var path = require('path')
var express = require('express')
var app = express()

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

var port = process.argv[2] || 3000
app.listen(port)

console.log('Server running in port ' + port);
