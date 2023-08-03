const router = require('express').Router();
const { QRLink} = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/',withAuth, async (req, res) => {
  try {
    const newUrl = await QRLink.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newUrl);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;