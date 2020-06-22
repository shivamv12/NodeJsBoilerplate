/** NPM Packages */
const {check, validationResult} = require('express-validator');

/** Validate User Sign Up Request */
exports.validateSignUp = [
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Please enter Name.')
    .bail()
    .isLength({min: 2, max: 50})
    .withMessage('Name must be minimum 2 & maximum 50 characters long.')
    .bail(),
  check('email')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Please enter Email Address.')
    .bail()
    .normalizeEmail()
    .isEmail()
    .withMessage('Please enter valid Email Address.')
    .bail(),
  check('password')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Please enter Password.')
    .bail()
    .isLength({min: 6, max: 20})
    .withMessage('Password must be minimum 6 & maximum 20 characters long.')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];

/** Validate User Sign In Request */
exports.validateSignIn = [
  check('email')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Please enter Email Address.')
    .bail()
    .normalizeEmail()
    .isEmail()
    .withMessage('Please enter valid Email Address.')
    .bail(),
  check('password')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Please enter Password.')
    .bail()
    .isLength({min: 6, max: 20})
    .withMessage('Password must be minimum 6 & maximum 20 characters long.')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];
