/** NPM Packages */
/** Custom Packages */
const User = require('../models/User');

/**
 * @param - payload (name, email, password, uid, slug)
 * @desc - Query to Insert user data
 */
exports.create = async (payload) => await User.create(payload);
