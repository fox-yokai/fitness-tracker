# fitness-tracker
With the fitness tracker you can create workout and track your weekly progress
## How to use
Navigate to https://still-river-60896.herokuapp.com/

To create a new workout simply cick on the "New Workout" button and select a exercise type. Once the information is entered click "Add Exercise".

To add additional exercises to the workout click on "Continue Workout".

To start a new workout click on "New Workout"

To check your weekly progress click on the "Dashboar" link in the upper-left corner.

## Code Highlgights
```
router.get('/api/workouts/range', function (req, res){
    Workout.find({ day: { $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000) }})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });
```