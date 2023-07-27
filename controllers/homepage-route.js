const router = require('express').Router()
const { User, QRLink } = require('../models')
// Import the custom middleware
// const withAuth = require('../utils/auth')

// GET all post for homepage
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [
        {
          model: QRLink,
          attributes: ['description', 'date_created', 'user_id']
        }
      ]
    })

    const user = userData.map((post) =>
      post.get({ plain: true })
    )

    res.render('homepage', {
      user
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})
