import express from 'express';

const router = express.Router();
const getContact = router;

import Contact from '../../models/contact';

getContact.get('/contacts/:id', (req, res) => {
    const { id } = req.params;
  
    Contact.findById(id)
      .then(contact => {
        if (!contact) {
          res.status(404).json({ error: 'Contact not found' });
        } else {
          res.status(200).json(contact);
        }
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving contact' });
      });
  });

  export default getContact;