import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

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
          {/* spread object into ContestPreview so it gets all the properties of `contest` on the first level */}
          {/* loop with a map call. map into ContestPreview elements, which exposes a `contest` element */}
          {this.props.contests.map(contest =>
            <ContestPreview {...contest} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
