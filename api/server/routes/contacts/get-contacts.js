import express from 'express';

const router = express.Router();
const getContacts = router;

import Contact from '../../models/contact';

getContacts.get('/contacts', (req, res) => {
    Contact.find()
      .then(contacts => {
        res.status(200).json(contacts);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving contacts' });
      });
  });

  export default getContacts