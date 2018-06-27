import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

/**
 * Use `EJS` as our view engine.
 * We usually need the server to respond with an HTML view template, but with dynamic content inside.
 * Instead of generating a big HTML string, we can use a dynamic template language lik `EJS`, "Embedded JavaScript".
 * `EJS` is the simplest templating option out of the many options available.
 *
 * @param (string) 
 * @param (string) template, by default located in `./views` folder/
*/
server.set('view engine', 'ejs');
server.get('/', (req, res) => {
	/**
	 * `render()`.
	 *
	 * @param (string) name of EJS template.
	 * @param (object) variable to render
	*/
  res.render('index', {
  	content: 'Hello Express and <em>EJS!</em>'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
