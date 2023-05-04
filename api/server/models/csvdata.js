const mongoose = require('mongoose');

const csvdataSchema = new mongoose.Schema({
    customFields: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

module.exports = mongoose.model('CsvData', csvdataSchema);