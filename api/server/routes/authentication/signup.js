import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();
const signup = router;

import User from '../../models/user';

signup.post('/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword 
        });

        await user.save(); 
        const token = jwt.sign({ username: user.username, email: user.email, role: user.role }, process.env.secretKey);

        res.json({ token, user });
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default signup;