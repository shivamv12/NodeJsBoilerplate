/** NPM Packages */
/** Custom Packages */
const authService = require('../services/authService');

/**
 * @param - name, email, password
 * @desc - User Sign Up Functionality
 */
exports.signUp = async (req, res) => {
  try {
    const user = await authService.signUp(req.body);
    if (!user)
      return res.status(409).send({msg: 'User could not be registered.'});
    return res
      .status(200)
      .send({msg: 'Successfully Registered.', data: req.body});
  } catch (err) {
    return res.status(500).send({msg: err.message});
  }
};
