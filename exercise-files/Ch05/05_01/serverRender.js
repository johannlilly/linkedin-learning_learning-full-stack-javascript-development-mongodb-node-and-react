// fetch the data from the api, assuming this part doesn't have direct access to the data

import config from './config';
import axios from 'axios';

axios.get(`${config.serverUrl}/api/contests`) // full server URL, defined in config.js
  .then(resp => {
    console.log(resp.data);
  })
  .catch()