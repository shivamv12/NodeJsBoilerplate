/** NPM Packages */
/** Custom Packages */
const User = require('../models/User');

/**
 * @param - payload: <object> {name, email, password, uid, slug}
 * @desc - Query to create new user record into database
 */
exports.create = async (payload) => await User.create(payload);

/**
 * @param - filter: <object> eg. {email: <val>}
 * @desc - Query to find user data, based on: email, uid, slug etc.
 */
exports.findOne = async (filter) => await User.findOne(filter);
