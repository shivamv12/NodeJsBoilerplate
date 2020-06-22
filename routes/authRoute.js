/** NPM Packages */
const router = require('express').Router();

/** Custom Packages */
const {
  validateSignUp,
  validateSignIn,
} = require('../middlewares/validators/authValidator');
const {signUp, signIn} = require('../controllers/authController');

/** End Points */
router.route('/sign-up').post(validateSignUp, signUp);
router.route('/sign-in').post(validateSignIn, signIn);

module.exports = router;
