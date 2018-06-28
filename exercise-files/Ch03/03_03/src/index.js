import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ message }) => { // destructure the prop `message`
	return(
	    <h2 className="Header text-center"> {/* using a class name that matches the name of the component is good standard practice */}
	      {message}
	    </h2>
	);	
};

Header.propTypes = {
  message: React.PropTypes.string.isRequired
};

const App = () => {
  return (
  	<div className="App">
  		<Header message="Naming Contests"/>
  		<div>
  			...
  		</div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
