import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

/// render directly without `axios` using `window`
ReactDOM.render(
  <App initialContests={window.initialData.contests} />,
  document.getElementById('root')
);