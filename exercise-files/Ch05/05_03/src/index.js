import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './components/App';
/// markup rendering from the server matches what React starts with
axios.get('/api/contests')
  .then(resp => {
    ReactDOM.render(
      <App initialContests={resp.data.contests} />, // initialize with same data as on the server
      document.getElementById('root')
    );
    // this.setState({
    //   contests: resp.data.contests
    // });
  })
  .catch(console.error);