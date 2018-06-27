import https from 'https'; // core
// http module for non-ssl

// https.get(...)
https.get('https://www.lynda.com', res => {
	// returns string
	console.log('Response status code: ', res.statusCode);

	res.on('data', chunk => {
		console.log(chunk.toString());
	});
	
});

// $ babel-node server.js | less