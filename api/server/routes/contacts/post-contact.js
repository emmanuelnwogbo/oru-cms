import express from 'express';

const router = express.Router();
const postContact = router;

import Contact from '../../models/contact';

// POST /contacts - create new contact
postContact.post('/contacts', (req, res) => {
    const { firstName, lastName, email, phone, company, jobTitle, customFields } = req.body;
  
    // Validate request body
    if (!firstName || !lastName || !email) {
      res.status(400).json({ error: 'First name, last name, and email are required' });
      return;
    }
  
    // Create new contact record in database
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
      customFields
    });

    
    newContact.save()
    .then(savedContact => {
      res.status(201).json(savedContact);
    })
    .catch(error => {
      //console.error(error);
      res.status(500).json({ error: 'Error creating contact' });
    });
  });

  export default postContact