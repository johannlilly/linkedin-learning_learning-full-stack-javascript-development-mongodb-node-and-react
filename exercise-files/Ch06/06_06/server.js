import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';
import express from 'express';

const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get(['/', '/contest/:contestId'], (req, res) => {
  // req.params.contestId
  serverRender(req.params.contestId) // pass as param
    .then(({ initialMarkup, initialData }) => {
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(console.error);
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
