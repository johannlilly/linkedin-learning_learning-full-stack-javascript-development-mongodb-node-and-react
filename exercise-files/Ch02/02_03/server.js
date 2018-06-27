import config from './config';

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
 * GET the [About] page using Express's static middleware.
 * `.use` is how we put our middleware in the Express middleware stack.
 * 
 * @param: `express.static()`: add our middleware to the Express middleware stack
 * @param: `public`; where we want our static assets to be hosted on the file system.
 *
 * @dev: in a production environment, you should manage static assets separately from the node server, as there are much faster options, like `nginx`.
 * @dev: in a development enviornmnet, to keep things simple, we are using the simple Express middleware.
 */
server.use(express.static('public'));

/**
 * We can use other methods to send things to the requester
 *
 * @param: the port from configuration file.
 * @param: a success handler.
 */
server.listen(config.port, () => {
	console.log('Express listening on port ', config.port);
});
