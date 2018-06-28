import React from 'react';
import ReactDOM from 'react-dom';
/// We don't usually work with elements directly, but use componensts.

/**
 * @param (object) `props` includes all attributes passed to the JSX element.
*/
const App = (props) => {
	return (
		<h2 className="text-center">
			{props.headerMessage}
		</h2>
	);
};

ReactDOM.render(
  <App headerMessage="Hello props!" />,
  document.getElementById('root')
);
