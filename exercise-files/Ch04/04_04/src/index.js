import React from 'react';
import ReactDOM from 'react-dom';

import data from './testData';
import App from './components/App';


/// Render `contests` from `state` instead of `props`
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
