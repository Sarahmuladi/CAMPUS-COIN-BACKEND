const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
  return jwt.sign({ id: user._id, username: user.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user._id, username: user.username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

// Register User
const signUp = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    
    const user = await User.signup({ fullName, email, password });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.status(201).json({ message: 'User registered successfully', user });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  
};

// Login User
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.signin({ email, password });
   
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.status(201).json({ message: 'User logged in successfully', user, accessToken, refreshToken });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  
};

// Refresh Token
const refresh = (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(403).json({ message: 'Forbidden' });

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid refresh token' });

    const newAccessToken = generateAccessToken(user);
    res.json({ accessToken: newAccessToken });
  });
};

module.exports = { signUp, signIn, refresh };



