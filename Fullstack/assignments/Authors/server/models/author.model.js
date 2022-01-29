const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({

    authorName:{
        type: String,
        required:[true, 'The author must have a name!'],
        minLength:[3, 'The name must be at least 3 characters!']
    }

}, {timestamps: true})

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;