const router = require('express').Router()

//const { User, QRLink } = require('../../model') will be needing this soon

router.get('/', async (req, res) => {
    try {
      res.status(200).render('dashboard')
    } catch (err) {
      res.status(400).json(err)
    }
  })
  





module.exports = router
