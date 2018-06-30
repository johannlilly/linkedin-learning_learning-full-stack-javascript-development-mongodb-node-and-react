import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests }) => (
  <div className="ContestList">
    {// this.state.contests.map(contest => 
      contests.map(contest => // we don't have state
      <ContestPreview key={contest.id} {...contest} />
    )}
  </div>
);

ContestList.propTypes = {
  contests: React.PropTypes.array
}

export default ContestList;