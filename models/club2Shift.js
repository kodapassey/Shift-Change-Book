const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: function () { return new Date(this.date.setHours(0, 0, 0, 0)); },
        required: true,
    },
    needsCoverage: {
        type: String,
        required: true
    },
    coveringShift: {
        type: String
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    }
})

const Club2Shift = mongoose.model('Club2Shift', shiftSchema);

module.exports = Club2Shift;