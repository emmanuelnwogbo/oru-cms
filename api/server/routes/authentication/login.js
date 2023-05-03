const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import User from '../../models/user';

const login = router;

login.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const passwordMatches = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatches) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({
            user_id: user._id,
            username: user.username, 
            email: user.email, 
            role: user.role 
        }, process.env.secretKey);

        res.json({ token });

    } catch(error) {
        res.status(500).json({ message: err.message });
    }
});

export default login