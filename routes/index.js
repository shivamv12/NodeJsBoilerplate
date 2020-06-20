/** NPM Packages */
const app = require('express').Router();

app.all('/*', (req, res, next) => {
  if (req.path === '/') return res.status(200).send({msg: 'Server Root.'});
});

module.exports = app;
