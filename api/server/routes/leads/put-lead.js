import express from 'express';

const router = express.Router();
const putLead = router;

import Lead from '../../models/lead';
import LeadHistory from '../../models/leadHistory';
import authenticateJWT from '../../utilities/authenticateJwt';

putLead.put('/leads/:id', authenticateJWT, async (req, res) => {
    const id = req.params.id;
    const { firstName, lastName, email, phone, status, customFields } = req.body;
  
    try {
      const decoded = req.user;
      const updatedBy = decoded.user_id;

      if (!decoded.role) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const leadHistory = new LeadHistory({
        leadId: id,
        updatedBy
      });

      await leadHistory.save();

      const updatedLead = await Lead.findByIdAndUpdate(id, {
        firstName,
        lastName,
        email,
        phone,
        status,
        customFields,
        updatedBy,
        updatedAt: Date.now()
      }, { new: true });
  
      if (!updatedLead) {
        return res.status(404).json({ message: 'Lead not found' });
      }
  
      res.status(200).json(updatedLead);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

export default putLead;