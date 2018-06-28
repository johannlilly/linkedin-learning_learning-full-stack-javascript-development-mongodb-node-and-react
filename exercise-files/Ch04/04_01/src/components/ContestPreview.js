import React from 'react';

// can be stateless
const ContestPreview = (contest) => (
  <div className="ContestPreview">
    <div>
      {contest.categoryName}
    </div>
    <div>
      {contest.contestName}
    </div>
  </div>
);

export default ContestPreview;