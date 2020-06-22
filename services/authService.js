/** NPM Packages */
const JWT = require('jsonwebtoken');

/** Custom Packages */
const slugGenerator = require('../utils/slugGenerator');
const randomGenerator = require('../utils/randomGenerator');
const userRepo = require('../repositories/userRepositories');

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

  return await userRepo.create(payload);
};
