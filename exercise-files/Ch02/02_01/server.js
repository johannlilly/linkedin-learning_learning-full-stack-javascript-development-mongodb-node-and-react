import http from 'http';

const server = http.createServer();
/// `createServer()` gives event emitter object which we can subscribe to
/// `request` is the most important emitted event, which gets emitted every time the http server receives a request

server.listen(8080);

server.on('request', (req, res) => {
	res.write('Hello HTTP!\n');
	setTimeout(() => {
		res.write('I can stream!\n');
		res.end();
	}, 3000); // timeout
});
/// the callback for this event receives two (2) special objects: a request object, `req`, and and response object, `res`.
/// the user initiating the request will see anything we write to the response object
/// we can use the response object to read things from the request, including:
/// - what URL was requested
/// - were there any string parameters?

/// the response object is a **"writable string"**, which means we can use it to stream data to the user

/// 	$ babel-node server.js
///		$ curl http://localhost:8080/