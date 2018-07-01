// all our api logic
import axios from 'axios';

export const fetchContest = contestId => {
  return axios.get(`/api/contests/${contestId}`) // promise from axios
              .then(resp => resp.data);
};