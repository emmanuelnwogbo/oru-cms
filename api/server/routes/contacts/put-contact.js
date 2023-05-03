import express from 'express';

const router = express.Router();
const putContact = router;

import Contact from '../../models/contact';

putContact.put('/contacts/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, phone, company, jobTitle, customFields } = req.body;
  
    // Validate request body
    if (!firstName || !lastName || !email) {
      res.status(400).json({ error: 'First name, last name, and email are required' });
      return;
    }
  
    // Update contact record in database
    Contact.findByIdAndUpdate(id, {
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
      customFields,
      updatedAt: Date.now()
    }, { new: true })
      .then(updatedContact => {
        if (!updatedContact) {
          res.status(404).json({ error: 'Contact not found' });
        } else {
          res.status(200).json(updatedContact);
        }
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Error updating contact' });
      });
  });

export default putContact;