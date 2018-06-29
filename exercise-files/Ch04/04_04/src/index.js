import React from 'react';
import ReactDOM from 'react-dom';

import data from './testData';
import App from './components/App';


/// Before data is loaded, render the react application with an empty array
ReactDOM.render(
  <App contests={[]} />,
  document.getElementById('root')
);
