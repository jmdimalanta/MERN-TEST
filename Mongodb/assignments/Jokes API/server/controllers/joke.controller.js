const Joke = require('../models/joke.model')

module.exports = {
    
    findAllJokes: (req, res) => {
        Joke.find()
            .then((allJokes)=>{
                console.log(allJokes);
                res.json(allJokes);
            })
            .catch((err)=> {
                console.log("Find All Jokes failed");
                res.json({message: "Something went wrong with find all", error: err})
            })
    },

    createNewJoke: (req, res) => {
        Joke.create(req.body)
            .then((newJoke)=>{
                console.log(newJoke);
                res.json(newJoke);
            })
            .catch((err)=>{
                console.log("Something went wrong in createNewJoke");
                res.status(400).json(err);
            })
    },

    findOneJoke: (req, res) => {
        Joke.findOne({_id: req.params.id})
            .then((oneJoke)=> {
                console.log(oneJoke);
                res.json(oneJoke)
            })
            .catch((err)=>{
                console.log("Find one joke failed");
                res.json({message: "Something went wrong with findOneJoke", error: err})
            })
    },

    deleteJoke: (req, res) => {
        Joke.deleteOne({_id: req.params.id})
            .then((deletedJoke)=> {
                console.log(deletedJoke);
                res.json(deletedJoke)
            })
            .catch((err)=>{
                console.log("Delete one joke failed");
                res.json({message: "Something went wrong with deleteJoke", error: err})
            })
    },

    updateJoke: (req, res) => {
        Joke.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
            .then((updatedJoke)=> {
                console.log(updatedJoke);
                res.json(updatedJoke)
            })
            .catch((err)=>{
                console.log("Delete one joke failed");
                res.status(400).json(err);
            })
    },
}