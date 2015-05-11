var http = require('http')
var map = require('through2-map')
var url = require('url')
var port = process.argv[2]

http.createServer(function(req, res) {
  if (req.method != 'GET')
    return res.end('send me a GET\n')

  var query = url.parse(req.url, true);

  res.writeHead(200, { 'Content-Type': 'application/json' })

  if (query.pathname === '/api/parsetime') {
    var d = new Date(query.query.iso);
    res.end(JSON.stringify({ hour: d.getHours(), minute : d.getMinutes(), second : d.getSeconds()}))
  }

  if (query.pathname === '/api/unixtime') {
    var d = new Date(query.query.iso);
    res.end(JSON.stringify({unixtime : d.getTime()}))
  }

  res.end('');
}).listen(port)

console.log('Server running at port ' + port);
