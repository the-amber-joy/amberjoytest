var express = require('express');
var router = express.Router();
var answerList = require('../../data/answers.json');
var randomNumber = require('../../data/randomNumberGenerator.js');

router.get('/', function (req, res) {

    //array of answers from JSON
    var answers = answerList.answers;

    //pick a random number to decide which answer to send
    var theAnswer = randomNumber(0, answers.length);

    //sends one random answer back when called
    res.send(answers[theAnswer].response);

});

module.exports = router;