var http = require('http');
const BufferList = require('bl');

var bl = new BufferList();
http.get(process.argv[2], function(res) {
	res.setEncoding('utf8');
	res.pipe(BufferList(function (err, data) {
		bl.append(data.toString());
	}));
	res.on('error', console.error);
	res.on('end', function(end) {
		console.log(bl.length);
		console.log(bl.toString());
	});
});
