import React from 'react';
import ReactDOM from 'react-dom';
/// We don't usually work with elements directly, but use componensts.
/// We are able to create our own JSX-based HTML elements.

const App = () => {
	return (
		<h2 className="text-center">
			Hello React Components!
		</h2>
	);
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
