//require (import) HTTP module. 
var http = require("http");

//Define the two ports to listen to
var PORT1 = 7000;
var PORT2 = 7500;

//The function hanlde/request for Port 1
function handleRequest1 (request, response) {
	response.end("You are very intelligent.");
}

//The function handle/request for Port 2
function handleRequest2 (request, response) {
	response.end("You're really messy, and you always turn in your homework late.");
}

//Use Node HTTP package to create server.
//Then pass it the handleRequest1 or handleRequest2 function, depending on the port.
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function() {

	console.log("Server listening on: http:localhost%s", PORT1)
});

server2.listen(PORT2, function() {

	console.log("Server listening on: http:localhost%s", PORT2)
});
