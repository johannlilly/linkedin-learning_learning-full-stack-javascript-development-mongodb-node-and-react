import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  /// initial data for server-side component loading
  <App initialContests={[]} />,
  document.getElementById('root')
);
