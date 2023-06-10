require('dotenv').config();
const jwt = require('jsonwebtoken');
const { badRequest } = require('../errors/index');

const login = async (req, res) => {
    const { username, password } = req.body;

    console.log(username, password)

    if (!username || !password) {
        throw new badRequest('Please provide email and password');
    }

    // normally we would check if the user is in the database
    // but for this demo, let's just hardcode it
    const id = new Date().getDate();
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })
    console.log(token)
    res.status(200).json({ msg: 'User created!', token });
};

const dashboard = async (req, res) => {
    console.log(req.user)
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({ msg: `Hello, ${req.user.username}`, secret: `Your lucky number is ${luckyNumber}` });
}

module.exports = {
    login,
    dashboard
}