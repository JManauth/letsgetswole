const router = require('express').Router();
const Workout = require('../../models/workout.js')



router.get('/', async (req, res) => {
    Workout.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post('/', async ({body}, res) => {
    try{
        const newWorkout = await Workout.create(body)
        res.json(newWorkout);
    } catch(err){
        res.status(400).json(err);
    }
});

router.put('/:id', async ({params, body}, res) => {
    try{
        const updateWorkout = await Workout.findByIdAndUpdate(
            {_id: params.id}, {$push: {exercises: body}}
        );
        res.json(updateWorkout);
    } catch(err){
        res.status(400).json(err);
    }
});

module.exports =  router;