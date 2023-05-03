const mongoose = require('mongoose');

const leadHistorySchema = new mongoose.Schema({
    leadId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lead',
      required: true
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  }, { timestamps: true });

  module.exports = mongoose.model('LeadHistory', leadHistorySchema);