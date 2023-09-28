const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String
    },
    repository: {
        type: String
    },
    live: {
        type: String
    },
    description: {
        type: String
    },
    stack: {
        type: String
    }
});

module.exports = mongoose.model('Project', ProjectSchema);