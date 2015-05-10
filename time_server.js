var net = require('net')
var strftime = require('strftime')

var server = net.createServer(function(socket){
	socket.write(strftime('%F %H:%M', new Date()))
	socket.write('\n')
	socket.end()
})

server.listen(process.argv[2]);

console.log('Server listening in port: ' + process.argv[2]);
