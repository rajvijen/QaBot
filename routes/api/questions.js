const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Person Model
const Person = require("../../models/Person");

//Load Profile Model
const Profile = require("../../models/Profile");

//Load Question Model
const Question = require("../../models/Question");

// @type/Method         GET
//@route                /api/questions/
// @desc                route to get all the questions 
// @access              PUBLIC
router.get('/', (req, res) => {
    Question.find()
        .sort({ date: "desc" })
        .then(questions => res.json(questions))
        .catch(err => res.json({ notifications: "there is no any question to display!!!" }));
});

// @type/Method         POST
//@route                /api/questions/
// @desc                route for submitting questions
// @access              PRIVATE
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const newQuestion = new Question({
            textone: req.body.textone,
            texttwo: req.body.texttwo,
            user: req.user.id,
            name: req.body.name
        });
        newQuestion
            .save()
            .then(question => res.json(question))
            .catch(err => console.log("Unable to push question to the DB!!!" + err));
});

module.exports = router;
