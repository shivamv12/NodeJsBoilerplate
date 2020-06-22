/** NPM Packages */
const JWT = require('jsonwebtoken');

/** Custom Packages */
const slugGenerator = require('../utils/slugGenerator');
const randomGenerator = require('../utils/randomGenerator');
const userRepo = require('../repositories/userRepositories');
const sendMail = require('../utils/sendMail');

/**
 * @desc - Generate signed JWT token. Payload: {id, email}
 */
exports.getSignedJwtToken = async (user) =>
  await JWT.sign({uid: user.uid, email: user.email}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

/**
 * @desc - User Sign Up Service
 */
exports.signUp = async (payload) => {
  payload.uid = await randomGenerator({prefix: 'uid', length: 8});
  payload.slug = await slugGenerator(payload.name, {length: 5});

  let duplicate = await userRepo.findOne({email: payload.email});
  if (duplicate) return 0;

  /** Sending welcome email */
  await sendMail({
    to: payload.email,
    subject: 'Company Welcoming you onboard',
    body: 'We are glad to see you with us onboard on platform. Thanks.',
  });

  return await userRepo.create(payload);
};
