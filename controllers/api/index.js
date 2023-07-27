const router = require('express').Router()

const signUpRoute = require('./signup.js')
const dashboardRoute = require('./dashboard.js')
const logInRoute = require('./login-route.js')
const viewUserRoute = require('./viewUser-route.js')
const leaderboardRoute = require('./leaderboard-route.js')

router.use('/signUp', signUpRoute)
router.use('/logIn', logInRoute)
router.use('/dashboard', dashboardRoute)
router.use('/viewUser', viewUserRoute)
router.use('/leaderboard', leaderboardRoute)

module.exports = router
