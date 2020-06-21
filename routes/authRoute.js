/** NPM Packages */
const router = require('express').Router();

/** Custom Packages */
const {validateSignUp} = require('../middlewares/validators/authValidator');
const {signUp} = require('../controllers/authController');

/** End Points */
router.route('/sign-up').post(validateSignUp, signUp);

module.exports = router;
