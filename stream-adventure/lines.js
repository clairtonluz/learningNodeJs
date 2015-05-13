var through = require('through2')
var split = require('split')

var odd = true;

function write (line, _, next){
  var result = odd ? line.toString().toLowerCase() : line.toString().toUpperCase();
  odd = !odd;
  this.push(result + '\n');
  next();
}

process.stdin
  .pipe(split())
  .pipe(through(write))
  .pipe(process.stdout);

