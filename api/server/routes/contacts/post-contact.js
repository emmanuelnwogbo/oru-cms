import express from 'express';

const router = express.Router();
const postContact = router;

import Contact from '../../models/contact';
import authenticateJWT from '../../utilities/authenticateJwt';

// POST /contacts - create new contact
postContact.post('/contacts', authenticateJWT, async (req, res) => {
    const { firstName, lastName, email, phone, customFields } = req.body;
  
    // Validate request body
    if (!firstName || !lastName || !email) {
      res.status(400).json({ error: 'First name, last name, and email are required' });
      return;
    }

    const decoded = req.user;

    if (!decoded.role) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const createdBy = decoded.user_id;
  
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      createdBy,
      customFields
    });

    
    newContact.save().then(savedContact => {
      res.status(201).json({ savedContact });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error creating contact' });
    });
  });

  export default postContact