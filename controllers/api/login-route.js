const router = require('express').Router()

//const { User } = require('../../model') will be needing this soon

router.get('/', async (req, res) => {
  try {
    res.status(200).render('login')
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router
