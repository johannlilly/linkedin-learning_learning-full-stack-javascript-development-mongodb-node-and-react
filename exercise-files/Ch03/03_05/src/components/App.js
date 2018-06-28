import React from 'react';
import Header from './Header';

class App extends React.Component {
  /// Use a class property instead of a constructor
  state = { 
    test: 42
  };
	render() {
		return (
			<div className="App">
				<Header message="Naming Contests" />
				<div>
          {/* Use property on state object inside a variable */}
				  {this.state.test}
				</div>
			</div>
		);
	}
}
export default App;
