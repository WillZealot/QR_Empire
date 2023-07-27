const router = require('express').Router()

const userRoute = require('./user-route.js')
const signUpRoute = require('./signup.js')
const dashboardRoute = require('./dashboard.js')
const logInRoute = require('./login-route.js')
const viewUserRoute = require('./viewUser-route.js')

router.use('/user', userRoute)
router.use('/signUp', signUpRoute)
router.use('/dashboard', dashboardRoute)
router.use('/logIn', logInRoute)
router.use('/viewUser', viewUserRoute)

module.exports = router
