var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'))

app.put('/message/:id', function(req, res) {
  res.end(
    require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex')
  );
});

app.listen(process.argv[2] || 3000)
