const router = require('express').Router();
const { User, QRLink } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all post for homepage
router.get('/', async (req, res) => {
  try {
    // const userData = await QRLink.findAll({
    //   include: [
    //     {
    //       model: User,
    //     },
    //   ],
    // });

    // const users = userData.map((users) => users.get({ plain: true }));

    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    res.status(200).render('login');
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    res.status(200).render('signup')
  } catch (err) {
    res.status(400).json(err)
  }
});

router.get('/dashboard',withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: QRLink }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;