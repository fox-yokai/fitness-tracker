const Exercise = require('../models/exerciseModel');
const Workout = require('../models/workoutModel');
const express = require('express');
const router = express.Router();
const path = require("path");


// get last workout
router.get('/api/workouts', function (req, res){
    Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });


// add exercise
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id,
        {
            $push: {exercises: body}
        },
        {
            new: true,
            runValidators: true
        }
        )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


// create workout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


// getworkouts in range



module.exports = router;