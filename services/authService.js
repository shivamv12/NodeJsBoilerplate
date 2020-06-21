/** NPM Packages */
/** Custom Packages */
const slugGenerator = require('../utils/slugGenerator');
const randomGenerator = require('../utils/randomGenerator');
const userRepo = require('../repositories/userRepositories');

/**
 * @desc - User Sign Up Service
 */
exports.signUp = async (payload) => {
  payload.uid = await randomGenerator({prefix: 'UID_', length: 8});
  payload.slug = await slugGenerator(payload.name, {length: 5});

  return await userRepo.create(payload);
};
