import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/// Force-replace the first rendered component to demonstrate lifecycle event `componentWillUnmount()`
setTimeout(() => {
  ReactDOM.render(
    <h2>....</h2>,
    document.getElementById('root')
  );
}, 4000);