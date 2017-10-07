//require (import) HTTP module. 
var http = require("http");

//Define the two ports to listen to
var PORT1 = 7000;
var PORT2 = 7500;

//The function hanlde/request for Port 1
function handleRequest1 (request, response) {

	var randomNice = ["You are very intelligent.", "You have a nice smile.", "You are a good cook.", "You are a loyal friend.", "You (usually) know when it's time to let go."];
	response.end(randomNice[Math.floor(Math.random() * randomNice.length)]);
}

//The function handle/request for Port 2
function handleRequest2 (request, response) {
	var randomRude = ["You smell bad.", "You are very messy.", "You always turn in your homework late.", "You are too intense.", "You can be really mean when you feel threatend or feel like you have to prove yourself."]
	response.end(randomRude[Math.floor(Math.random() * randomRude.length)]);
}

//Use Node HTTP package to create server.
//Then pass it the handleRequest1 or handleRequest2 function, depending on the port.
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function() {

	console.log("Server listening on: http:localhost%s", PORT1);
});

server2.listen(PORT2, function() {

	console.log("Server listening on: http:localhost%s", PORT2);
});
