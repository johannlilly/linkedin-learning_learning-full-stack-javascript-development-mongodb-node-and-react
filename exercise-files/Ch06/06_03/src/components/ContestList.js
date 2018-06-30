import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => ( // `contests` variable is now an object, not an array
  <div className="ContestList">
    {Object.keys(contests).map(contestId => // iterate over the keys
      <ContestPreview
        key={contestId}
        onClick={onContestClick}
        {...contests[contestId]} />
    )}
  </div>
);

ContestList.propTypes = {
  contests: React.PropTypes.object,
  onContestClick: React.PropTypes.func.isRequired,
};

export default ContestList;
