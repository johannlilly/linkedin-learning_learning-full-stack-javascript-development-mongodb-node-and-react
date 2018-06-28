import React from 'react';
import Header from './Header';

class App extends React.Component {
  /// Use a class property instead of a constructor
  state = { 
    pageHeader: 'Naming Contests'
  };
	render() {
		return (
			<div className="App">
				<Header message={this.state.pageHeader} />
				<div>
				  ...
				</div>
			</div>
		);
	}
}
export default App;
