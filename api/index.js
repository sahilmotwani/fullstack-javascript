import express from 'express';
import data from '../src/testData.json';

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
    let contest = contests[req.params.contestId];
    contest.description = 'He determined to drop his litigation with the monastry, and relinguish his claims to the wood-cuting and fishery rihgts at once. He was the more ready to do this becuase the rights had becom much less valuable, and he had indeed the vaguest idea where the wood and river in quedtion were.';
    res.send( contest);
});

export default router;
