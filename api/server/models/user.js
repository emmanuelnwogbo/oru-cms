const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ['admin', 'agent', 'user'],
    default: 'admin'
  },
  master: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  attributes: {
    type: Object,
    default: {}
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

userSchema.methods.getMaster = async function () {
  if (this.role === 'agent') {
    const creator = await this.constructor.findById(this.master);
    return creator;
  } else {
    return null;
  }
};

module.exports = mongoose.model('User', userSchema);

