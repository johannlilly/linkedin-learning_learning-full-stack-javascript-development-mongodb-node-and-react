import React from 'react';
import Header from './Header';
import ContestList from './ContestList';

const pushState = (obj, url) => 
  window.history.pushState(obj, '', url);

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };
  componentDidMount() {

  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  // fetch contest information from server
  fetchContest = (contestId) => {
    pushState(
      { currentContestId: contestId }, // object about that record; a state object
      `/contests/${contestId}` // url
    );
  };
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <ContestList 
          onContestClick={this.fetchContest}
          contests={this.state.contests} />
      </div>
    );
  }
}

export default App;
