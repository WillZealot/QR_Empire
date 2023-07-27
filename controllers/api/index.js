const router = require('express').Router()

const signUpRoute = require('./signup.js')
const dashboardRoute = require('./dashboard.js')
const logInRoute = require('./login-route.js')
const viewUserRoute = require('./viewUser-route.js')

router.use('/signUp', signUpRoute)
router.use('/logIn', logInRoute)
router.use('/dashboard', dashboardRoute)
router.use('/viewUser', viewUserRoute)

module.exports = router
