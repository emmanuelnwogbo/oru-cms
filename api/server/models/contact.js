const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  company: { type: String },
  jobTitle: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  customFields: { type: Map, of: String }
});


const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
