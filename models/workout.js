const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day:{
        type: Date,
        default: Date.now
    },
    exercises: [{
        type:{
            type: String,
            trim: true,
            required: "Please describe wether this is a cardio or resistance exercise",
        },
        name:{
            type: String,
            trim: true,
            required:"Please enter a name for this workout"
        },
        duration:{
            type: Number, 
        },
        distance:{
            type: Number, 
        },
        weight:{
            type: Number, 
        },
        reps:{
            type: Number, 
        },
        sets:{
            type: Number, 
        }
    }],
    versionKey: false 
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;