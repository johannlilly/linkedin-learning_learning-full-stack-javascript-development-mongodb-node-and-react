import config from './config';

import express from 'express';
const server = express();

/// Express handles server-side routing for us, exposing an API to listen to certain routs
/// Use `.send` to send a simple string to the requester
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