/** NPM Packages */
const passport = require('passport');
const app = require('express').Router();

require('../middlewares/passports/localStrategy');

/** Custom Packages */
const authRoute = require('./authRoute');

app.all('/*', (req, res, next) => {
  if (req.path === '/') return res.status(200).send({msg: 'Server Root.'});
  else if (req.path === '/auth/sign-up') next();
  else if (req.path === '/auth/sign-in')
    passport.authenticate('local', {session: false}, (err, user, info) => {
      if (!user || err || info != undefined)
        return res.status(401).send({msg: 'Invalid Credentials.'});

      req.user = user;

      next();
    })(req, res, next);
});

app.use('/auth', authRoute);

module.exports = app;
