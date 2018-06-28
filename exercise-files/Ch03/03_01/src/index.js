import React from 'react';
import ReactDOM from 'react-dom';

const color = Math.random() > 0.5 ? 'green' : 'red'; // ternary statement

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
	<h2 className="text-center" style={{color}}>Hello React with JSX! -- {Math.random()}</h2>,
	document.getElementById('root')
);