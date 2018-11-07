var sendImage = require('./modules/sendImage');
var http = require('http');

http.createServer(function(req, res) {
	const sampleImage = 'photos/bedroom.jpg';
	sendImage.sendImage(sampleImage);
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end('Hello World!');
	console.log('Listening on port 8080!');
}).listen(8080);
