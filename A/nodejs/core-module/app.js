
var http = require('http');

var requestHandler = function(request, response){

	console.log(request.url);
	console.log(request.method);
	response.write('welcome to node server');
	response.end();

}

var server = http.createServer(requestHandler);
server.listen(3000);
console.log('server started at 3000');

