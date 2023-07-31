const router = require('express').Router();

const users = require('./user-route.js');
const urlRoute = require('./qrlink-route.js');

router.use('/users', users);
router.use('/link', urlRoute);

module.exports = router;
