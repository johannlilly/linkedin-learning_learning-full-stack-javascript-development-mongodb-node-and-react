import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App' // top level of our React application

import config from './config';
import axios from 'axios';

/// returns promise
const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
    .then(resp => { // promise
      // console.log(resp.data);
      // ReactDOMServer.renderToStrign(<App />);

      /// Read our react code and render everything to string
      /// Component cannot be pre-rendered with data because we are currently loading it in `componentDidMount()`.
      /// We can make this component able to render using initial data, configured in `index.js`.
      return ReactDOMServer.renderToString(
        <App initialContests={resp.data.contests} />
      );
    });

export default serverRender;