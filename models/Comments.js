const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    comment: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        maxlength: 500
    }
});

module.exports = mongoose.model('Comments', CommentSchema);