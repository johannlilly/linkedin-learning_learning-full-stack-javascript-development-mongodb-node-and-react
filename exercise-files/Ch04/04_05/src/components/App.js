import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';
import data from '../testData';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  };
  componentDidMount() {
    /**
     * AJAX request: `.get()`.
     * axios is promise-based.
     * Handle every promise with `.then()`.
     * Catch every error with `.catch()`.
     *
     * @param URL of API endpoint to read
     *
    */
    axios.get('/api/contests')
      /**
       * axios `.then()` method
       * 
       * returns a response object `resp` with the data
      */
      .then(resp => {
        /**
         * Set the state according to and directly from the response data we are getting back through axios.
         *
        */
        // console.log(resp.data.contests);
        this.setState({
          contests: resp.data.contests
        });
      })
      .catch(console.error)
  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
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
