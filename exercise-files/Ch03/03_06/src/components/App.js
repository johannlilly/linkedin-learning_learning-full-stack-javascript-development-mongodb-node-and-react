import React from 'react';
import Header from './Header';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };
  /// Lifecycle event that guarantees that the DOM has been mounted in the browser successfully.
  componentDidMount() {
    // timers, listeners
  }
  /// Lifecycle event that says the component is about to be unmounted.
  componentWillUnmount() {
    // clean timers, listeners
  }
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
