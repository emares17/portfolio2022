const mongoose = require('mongoose');

const AboutMeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    aboutMe: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('AboutMe', AboutMeSchema);