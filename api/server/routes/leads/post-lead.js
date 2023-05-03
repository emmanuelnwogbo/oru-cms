import express from 'express';

const router = express.Router();
const postLead = router;

import Lead from '../../models/lead';
import authenticateJWT from '../../utilities/authenticateJwt';

router.post('/leads', authenticateJWT, async (req, res) => {
    const { firstName, lastName, email, phone, customFields } = req.body;

    if (!firstName || !lastName || !email || !phone) {
        return res.status(400).json({ message: 'Please provide a first name, last name, email, and phone number for the lead.' });
    }

    try {
        const decoded = req.user;

        if (!decoded.role) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const createdBy = decoded.user_id;

        const newLead = new Lead({
            firstName,
            lastName,
            email,
            phone,
            createdBy,
            customFields
        });

        const savedLead = await newLead.save();
        res.status(201).json(savedLead);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
  
module.exports = router;

export default postLead;