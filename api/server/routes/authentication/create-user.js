import express from 'express';
import bcrypt from 'bcryptjs';

const router = express.Router();
const createUser = router;

import User from '../../models/user';
import authenticateJWT from '../../utilities/authenticateJwt';

createUser.post('/createuser', authenticateJWT, async (req, res) => {
    try {
        const decoded = req.user;

        if (decoded.role !== 'admin') {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
        const user = new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
            role: 'agent',
            master: decoded._id
        });
        
        const newUser = await user.save();

        res.status(201).json(newUser);

    } catch(error) {
        console.log(error, 'error here')
    }
})

export default createUser;