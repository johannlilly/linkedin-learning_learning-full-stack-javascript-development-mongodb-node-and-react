import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests // initially empty, as passed in `index.js`
  };
  componentDidMount() {
    axios.get('/api/contests')
      .then(resp => {
        this.setState({
          // contests: resp.data.contests
          /// React application will continue to work on the front-end, but will also render on the back-end.
          contests: resp.data.contests
        });
      })
      .catch(console.error);
  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
    debugger;
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
