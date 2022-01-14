const mongoose = require("mongoose");


const JokeSchema = new mongoose.Schema({

    setup: {
        type: String,
        required: [true, "A jokes setup is required!"],
        minLength: [3, "The setup must be at least 3 characters!!!"]
    },

    punchLine: {
        type: String,
        required: [true, "A punchline is required!!!!"],
        minLength: [3, "The punchline must be at least 3 characters!!"]
    }
}, {timestamps: true})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;