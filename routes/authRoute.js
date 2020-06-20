/** NPM Packages */
const router = require('express').Router();
/** Custom Packages */
const User = require('../models/User');

router
  .route('/')
  .get((req, res) => res.json({msg: 'Get Route'}))
  .post(async (req, res) => {
    req.body.uid = 'U-uak32hsk2';
    const data = await User.create(req.body);
    return res.status(200).send({msg: 'Post Route', data: data});
  });

module.exports = router;
