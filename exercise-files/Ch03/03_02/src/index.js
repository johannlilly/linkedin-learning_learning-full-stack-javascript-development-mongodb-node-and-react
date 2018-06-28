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
 * 
 * Object: 
 * @key the props we want to validate as keys
 * @value the type of these props
*/
App.propTypes = {
	headerMessage: React.PropTypes.string
}

/**
 * Default values for props.
 * Prop validation for null value with `isReguired` no longer needed.
 * 
 * Object: 
 * @key the props we want to supply a default value for.
 * @value the defauly values.
*/
App.defaultProps = {
	headerMessage: 'Hello!!'
}


ReactDOM.render(
  <App headerMessage="Hello props!" />,
  document.getElementById('root')
);
