import express from 'express';
import data from '../src/testData';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

router.get('/contests', (req, res) => {
  res.send({
    contests: contests
  });
});

router.get('/contests/:contestId', (req, res) => {
  // available as `req.params.contestId`
  let contest = contests[req.params.contestId]; // gives contest object
  contest.description = 'Lorem ipsum dolor'; // temp data

  res.send(contest);
});

export default router;
