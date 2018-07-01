import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

const getApiUrl = contestId => {
  // what is returned corresponds to our routes
  if (contestId) {
    return `${config.serverUrl}/api/contests/${contestId}`;
  }

  return `${config.serverUrl}/api/contests`;
};

const getInitialData = (contestId, apiData) => {
  if (contestId) {
    return {
      currentContestId: apiData.id, // `apiData` is a single object that represents a single contest
      contests: { // React application computes the contest from `currentContestId`
        [apiData.id]: apiData
      }
    }
  }
  return {
    // default
    contests: apiData.contests // list
  }
};

const serverRender = (contestId) => // id passed by server
  axios.get(getApiUrl(contestId)) // read API URL based on `contestId`
    .then(resp => {
      const initialData = getInitialData(contestId, resp.data); // read initial data based on contest ID`
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={initialData} />
        ),
        initialData: resp.data
      };
    });

export default serverRender;
