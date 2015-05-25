var concat = require('concat-stream')

process.stdin.pipe(concat(function(body){
  this.push(body.toString());
}));
