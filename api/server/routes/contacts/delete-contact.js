import express from 'express';

const router = express.Router();
const deleteContact = router;

import Contact from '../../models/contact';

deleteContact.delete('/contacts/:id', (req, res) => {
    const { id } = req.params;
  
    // Delete contact record from database
    Contact.findByIdAndDelete(id)
      .then(deletedContact => {
        if (!deletedContact) {
          res.status(404).json({ error: 'Contact not found' });
        } else {
          res.status(204).send();
        }
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Error deleting contact' });
      });
  });
  

export default deleteContact;

