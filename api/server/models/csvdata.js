const mongoose = require('mongoose');

const csvdataSchema = new mongoose.Schema({
    customFields: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    },
    fileName: {
        type: String,
        required: true
    },
    status: {
      type: String,
      default: 'New'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

module.exports = mongoose.model('CsvData', csvdataSchema);