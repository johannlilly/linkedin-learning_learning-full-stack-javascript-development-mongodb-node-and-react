import express from 'express';
import data from '../src/testData';

const router = express.Router();

router.get('/contests', (req, res) => {
  res.send({
    // convert to object
    contests: data.contests.reduce((obj, contest) => { // expose object we will return; return `contest` object with every iteration
      obj[contest.id] = contest; // assign as a property on the object with the `id` being the `contest.id`
      return obj; // values are the actual contest objects
    }, {}) // start with an empty object
  });
});

export default router;
