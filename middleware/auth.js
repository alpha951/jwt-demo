require('dotenv').config();
const jwt = require('jsonwebtoken');
const { unauthenticatedError } = require('../errors/index');


const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {  // Bearer is the type of token {rem : the space after Bearer is important}
        throw new unauthenticatedError('Unauthorized, No token Provided!');
    }
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded;
        req.user = { id, username };
        next();
    } catch (err) {
        throw new unauthenticatedError('Unauthorized, Token invalid!');
    }
}

module.exports = authMiddleware;