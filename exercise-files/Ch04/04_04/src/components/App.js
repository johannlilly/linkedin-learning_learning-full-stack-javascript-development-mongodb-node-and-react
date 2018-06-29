import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import data from '../testData';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  };
  componentDidMount() {
    /// Use `setState()` to put data into the React state.
    /// This handles any delay in fetchign the API.
    /// Havign the data in `state` also allows us to control the list more.
    /// > $r.setState({ contests: $r.state.contests.slice(1) })
    this.setState({
      contests: data.contests
    })
  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {/* you must provide a unique key with every map call to idetify the child element inside that map */}
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
