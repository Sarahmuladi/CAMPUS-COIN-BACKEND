// const jwt = require('jsonwebtoken');

// const authenticateToken = (req, res, next) => {
//     const authHeader = req.headers['authorization'];

//     console.log(`Authorization Header: ${authHeader}`); // Log the authorization header
//     const token = authHeader && authHeader.split(' ')[1] //extract token

//     console.log(`Token: ${token}`); // Log the token

//     if(!token) {
//         console.log('No token provided'); // Log if no token is provided
//         // If no token is provided, respond with 401 Unauthorized
//         return res.status(401).json({message: 'Unauthorized'})
//     }

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, [(err, 
//         user) => {
//             if (err) return res.status(403).json({message: 'Forbidden'});
//             req.user = user;
//             next();
//         }
//     ]);
// };

// module.exports = authenticateToken;
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from the Authorization header

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded; // Attach user info to the request
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;