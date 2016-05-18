var express = require('express');
var router = express.Router();
var answerList = require('../../data/answers.json');
var randomNumber = require('../../data/randomNumberGenerator.js');

router.get('/', function (req, res) {

    //array of answers from JSON
    var answers = answerList.answers;

    var answerIndex = randomNumber(0, answers.length);

    res.send(answers[answerIndex].response);

});

module.exports = router;