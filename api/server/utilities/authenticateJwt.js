import jwt from 'jsonwebtoken';

function authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;
  
    if (authHeader) {
      const token = authHeader.split(' ')[1];
  
      jwt.verify(token, process.env.secretKey, (err, user) => {
        if (err) {
          return res.status(403).json({ error: 'Forbidden' });
        }
  
        req.user = user;
        next();
      });
    } else {
      res.status(401).json({ error: 'Unauthorized' }); 
    }
  }

  export default authenticateJWT; 