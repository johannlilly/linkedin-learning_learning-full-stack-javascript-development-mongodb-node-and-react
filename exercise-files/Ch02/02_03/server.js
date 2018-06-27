import config from './config';
import fs from 'fs'; // fs core

import express from 'express';
const server = express();

/**
 * GET the [root]
 *
 * Express handles server-side routing for us.
 * Handling routing exposes an API to listen to certain routs.
 * Use `server.get()`.
 * Use `.send` to send a simple string to the requester.
 *
 * @param: the route we are interested in (`root`, aka `\` in this case).
 * @param: the event handler, which receives both a request and response object.
 *
 * @dev: $ babel-node server.js
 * @dev: $ curl http://localhost:8080/
 * @dev: # Hello Express
*/
server.get('/', (req, res) => {
	res.send('Hello Express'); // return simple string
});

/**
 * GET the [About] page.
 *
 * @param: the route we are interested in.
 * @param: the event handler, which receives both a request and response object
 *
 * @dev: $ babel-node server.js
 * @dev: $ curl http://localhost:8080/about.html
 * @dev: # The about page
 */
server.get('/about.html', (req, res) => {
	/**
	 * readFile
	 *
	 * @param: path to file
	 * @param: event handler => buffer of file's data
	 *
	 */
	fs.readFile('./about.html', (err, data) => {
		res.send(data.toString());
	});
});

/**
 * We can use other methods to send things to the requester
 *
 * @param: the port from configuration file.
 * @param: a success handler.
 */
server.listen(config.port, () => {
	console.log('Express listening on port ', config.port);
});
