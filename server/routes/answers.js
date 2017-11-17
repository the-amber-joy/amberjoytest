var express = require('express');
var router = express.Router();
//var answerList = require('../../data/answers.json');
// var answerList = require('../../data/shamenames.json');
var answerList = require('../../data/umphreyWisdom.json');
var randomNumber = require('../../data/randomNumberGenerator.js');

router.get('/', function (req, res) {

    //array of answers from JSON
   //var answers = answerList.answers;
    var answers = answerList.wisdom;

    //pick a random number to decide which answer to send
    var theAnswer = randomNumber(0, answers.length);

    //sends one random answer back when called
    // res.send(answers[theAnswer].response);
    res.send(answers[theAnswer].post);


});

module.exports = router;
