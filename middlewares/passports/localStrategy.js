const passport = require('passport');
const {Strategy} = require('passport-local');
const userRepo = require('../../repositories/userRepositories');

passport.use(
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const user = await userRepo.findOne({email: email});
        if (!user) return done(null, false, {msg: 'Invalid Credentials.'});

        const isValid = await user.validatePassword(password);
        if (!isValid) return done(null, false, {msg: 'Invalid Credentials.'});

        done(null, await user.getUser());
      } catch (error) {
        done(error, false);
      }
    }
  )
);
