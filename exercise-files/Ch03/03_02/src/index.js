import React from 'react';
import ReactDOM from 'react-dom';
/// We don't usually work with elements directly, but use componensts.

/**
 * @param (object) `props` includes all attributes passed to the JSX element.
*/
const App = (props) => {
	return (
		<h2 className="text-center">
			{/* Use another component inside the `<App/>` component */}
			...
			{props.headerMessage}
		</h2>
	);
};

/**
 * Prop validation for wrong type
 * Prop validation for null value with `isReguired`. 
 * 
 * Object: 
 * @key the props we want to validate as keys
 * @value the type of these props
*/
App.propTypes = {
	headerMessage: React.PropTypes.string.isReguired
}

ReactDOM.render(
  <App headerMessage="Hello props!" />,
  document.getElementById('root')
);
