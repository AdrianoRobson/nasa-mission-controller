const mongoose = require('mongoose')

const launcheSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        require: true,
    },
    launchDate: {
        type: Date,
        required: true,
    },
    customers: [String],
    mission: {
        type: String,
        required: true,
    },
    rocket: {
        type: String,
        required: true,
    },
    target: {
        type: String,
        required: true,
    },
    upcoming: {
        type: Boolean, 
    },
    success: {
        type: Boolean,
        required: true,
        default: true
    }
})

// Connects launchesSchema with the "launches" collection
module.exports = mongoose.model('Launch', launcheSchema)