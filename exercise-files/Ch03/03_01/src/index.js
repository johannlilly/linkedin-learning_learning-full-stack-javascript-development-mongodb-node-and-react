import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Arguments of the `.render()` method.
 *
 * @param (string) a react element.
 * @param (string) where we want the element to be rendered.
*/
ReactDOM.render(
	/**
	 * Arguments of the `createElement()` API method.
	 *
	 * @param (string) HTML tag type.
	 * @param (string) any attributes we want to add to the tag.
	 * @param (string) any children we want rendered
	*/
	<h2>Hello React with JSX!</h2>,
	document.getElementById('root')
);