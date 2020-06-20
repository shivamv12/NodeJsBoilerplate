/** NPM Packages */
/** Custom Packages */
const router = require('express').Router();

router
  .route('/')
  .get((req, res) => res.json({msg: 'Get Route'}))
  .post((req, res) =>
    res.status(200).send({msg: 'Post Route', data: req.body})
  );

module.exports = router;
