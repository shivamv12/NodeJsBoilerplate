const app = require('express').Router();

/** Implement passport on coming requests */
app.all('/*', (req, res, next) => {
  if (req.path === '/') return res.status(200).send({msg: 'Server Root.'});
});

module.exports = app;
