 const jwt = require('jsonwebtoken');

 const authMiddleware = (req, res, next) => {
     const authHeader = req.headers['authorization'];

     console.log(`Authorization Header: ${authHeader}`); // Log the authorization header
     const token = authHeader && authHeader.split(' ')[1] //extract token

     console.log(`Token: ${token}`); // Log the token

     if(!token) {
         console.log('No token provided'); // Log if no token is provided
         // If no token is provided, respond with 401 Unauthorized
         return res.status(401).json({message: 'Unauthorized'})
     }

     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, 
         user) => {
             if (err) return res.status(403).json({message: 'Forbidden'});
             req.user = user;
             next();
         }
     );
 };

 module.exports = authMiddleware;


// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   // Check if the Authorization header is present
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     console.error("Authorization header missing or malformed");
//     return res.status(401).json({ message: "Unauthorized: No token provided" });
//   }

//   // Extract the token
//   const token = authHeader.split(" ")[1];

//   try {
//     // Verify the token
//     const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

//     // Validate the decoded payload
//     if (!decoded || !decoded.id) {
//       console.error("Invalid token payload");
//       return res.status(403).json({ message: "Invalid token payload" });
//     }

//     // Attach user info to the request
//     req.user = decoded;
//     next();
//   } catch (error) {
//     console.error("Token verification failed:", error.message);
//     res.status(403).json({ message: "Invalid or expired token" });
//   }
// };

// module.exports = authMiddleware;