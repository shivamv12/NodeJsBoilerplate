/** Custom Packages */
const sendMail = require('../../utils/sendMail');
const userRepo = require('../../repositories/userRepositories');
const welcomeMail = require('../../views/mailers/auth/welcomeMail');

const welcomeMailResolver = async (payload) => {
  const userData = await userRepo.findOne({uid: payload.uid});

  /** Build different template based on portal */
  const body = await welcomeMail({
    to: userData.email,
    name: userData.name,
  });

  await sendMail({
    to: userData.email,
    subject: 'Company Welcoming you onboard',
    body: body,
  });
};

module.exports = welcomeMailResolver;
