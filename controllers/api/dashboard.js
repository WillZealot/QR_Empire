// const router = require('express').Router()
// const { User, QRLink } = require('../../models')

// router.get('/', async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: QRLink }],
//     });

//     const users = userData.get({ plain: true });

//     res.render('dashboard', {
//       ...users,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// module.exports = router
