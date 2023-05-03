import express from 'express';

const router = express.Router();
const getUsers = router;

import User from '../../models/user';

getUsers.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

export default getUsers;