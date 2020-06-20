/** NPM Packages */
const app = require('express').Router();

/** Custom Packages */
const authRoute = require('./authRoute');

app.all('/*', (req, res, next) => {
  if (req.path === '/') return res.status(200).send({msg: 'Server Root.'});
  next();
});

app.use('/auth', authRoute);

module.exports = app;
