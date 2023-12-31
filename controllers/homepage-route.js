const router = require('express').Router()
const { User, QRLink } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
  try {
    res.status(200).render('homepage', { logged_in: req.session.logged_in })
  } catch (err) {
    res.status(400).json(err)
  }
})

router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard')
    return
  }

  res.render('login')
})

router.get('/signup', async (req, res) => {
  try {
    res.status(200).render('signup')
  } catch (err) {
    res.status(400).json(err)
  }
})

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: QRLink }]
    })

    const user = userData.get({ plain: true })

    res.render('dashboard', {
      ...user,
      logged_in: true
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
