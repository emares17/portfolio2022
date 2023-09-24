const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        match: /^\d{3}(-|\s)\d{3}(-|\s)\d{4}$|^\d{10}$|^1\s\d{3}(-|\s)\d{3}(-|\s)\d{4}$|^(1\s?)?\(\d{3}\)(\s|\-)?\d{3}\-\d{4}$/
    },
    email: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        match:  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    },
    portfolio: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        match: /^(https?:\/\/)?[A-Za-z0-9.-]+\.[A-Za-z]{2,}(\/.*)?$/
    },
    github: {
        type: String,
        required: true,
        trim: true,
        match: /^(https?:\/\/)?[A-Za-z0-9.-]+\.[A-Za-z]{2,}(\/.*)?$/
    },
    linkedin: {
        type: String,
        required: true,
        trim: true,
        match: /^(https?:\/\/)?[A-Za-z0-9.-]+\.[A-Za-z]{2,}(\/.*)?$/
    }
});

module.exports = mongoose.model('Contact', ContactSchema);
