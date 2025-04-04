const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    console.log(`Authorization Header: ${authHeader}`); // Log the authorization header
    const token = authHeader && authHeader.split(' ')[1] //extract token

    console.log(`Token: ${token}`); // Log the token

    if(!token) {
        console.log('No token provided'); // Log if no token is provided
        // If no token is provided, respond with 401 Unauthorized
        return res.status(401).json({message: 'Unauthorized'})
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, [(err, 
        user) => {
            if (err) return res.status(403).json({message: 'Forbidden'});
            req.user = user;
            next();
        }
    ]);
};

module.exports = authenticateToken;