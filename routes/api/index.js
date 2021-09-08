const router = require('express').Router();
const workoutRoutes = require('./workouts');

router.use('/workout', workoutRoutes);

module.exports = router;