const express = require('express');

const router = express.Router();
const { login, dashboard } = require('../controllers/main');
const authMiddleware = require('../middleware/auth');

router.route('/login').post(login)

router.route('/dashboard').get(authMiddleware, dashboard)

// router.get('/dashboard', authMiddleware, dashboard)


module.exports = router;