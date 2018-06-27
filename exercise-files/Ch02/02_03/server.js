import config from './config';

import express from 'express';
const server = express();

/**
 * Express handles server-side routing for us.
 * Handling routing exposes an API to listen to certain routs.
 * Use `server.get()`
 * Use `.send` to send a simple string to the requester.
 *
 * @param: the route we are interested in (`root`, aka `\` in this case)
 * @param: the event handler, which receives both a request and response object
 */
server.get('/', (req, res) => {
	res.send('Hello Express');
});

/**
 * @param: the port from configuration file
 * @param: success handler
 */
server.listen(config.port, () => {
	console.log('Express listening on port ', config.port);
});