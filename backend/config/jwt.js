const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET_KEY;

function generateToken (user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    SECRET_KEY,
    { expiresIn: "1d" } 
  );
}

function verifyToken (token) {
  return jwt.verify(token, SECRET_KEY);
}

module.exports = { generateToken, verifyToken };