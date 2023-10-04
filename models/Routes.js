const mongoose = require('mongoose');

const RoutesSchema = new mongoose.Schema({
    method: {
        type: String,
        required: true
    },
    route: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Routes', RoutesSchema);