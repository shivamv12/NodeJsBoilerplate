/** NPM Packages */
/** Custom Packages */
const authService = require('../services/authService');
const welcomeMailJob = require('../jobs/auth/welcomeMailJob');

/**
 * @param - name, email, password
 * @desc - User Sign Up Functionality
 */
exports.signUp = async (req, res) => {
  try {
    const user = await authService.signUp(req.body);
    if (!user)
      return res.status(409).send({msg: 'User could not be registered.'});

    /** Sending welcome email */
    await welcomeMailJob({uid: user.uid});

    return res
      .status(200)
      .send({msg: 'Successfully Registered.', data: req.body});
  } catch (err) {
    return res.status(500).send({msg: err.message});
  }
};

/**
 * @param - email, password
 * @desc - User Sign In Functionality
 */
exports.signIn = async (req, res) => {
  try {
    const accessToken = await authService.getSignedJwtToken(req.user);
    return res.status(200).send({msg: 'Successfully Logged In.', accessToken});
  } catch (err) {
    return res.status(500).send({msg: err.message});
  }
};
