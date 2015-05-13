var through = require('through2')

function write (buffer, encoding, next){
  this.push(buffer.toString().toUpperCase());
  next();
}

var tr = through(write);

process.stdin.pipe(tr).pipe(process.stdout);
