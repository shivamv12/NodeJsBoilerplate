/** NPM Packages */
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const mongoose = require('mongoose');

/** Custom Package */
const usersSerializer = require('../serializers/usersSerializer');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      trim: true,
      type: String,
      required: [true, 'Please enter Name.'],
      minlength: [2, 'Name must be 2 characters long.'],
    },
    uid: {
      trim: true,
      type: String,
      required: [true, 'Please enter UID.'],
    },
    slug: {
      trim: true,
      type: String,
      required: [true, 'Please enter Slug.'],
    },
    email: {
      index: true,
      unique: true,
      type: String,
      required: [true, 'Please enter Email Address.'],
      match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please enter valid Email Address.',
      ],
    },
    password: {
      type: String,
      minlength: [6, 'Password must be 6 characters long.'],
    },
  },
  {timestamps: true}
);

/**
 * ==================== Middlewares ====================
 * Hash password before save it into DB
 */
UserSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err.message);
  }
});

/**
 * ====================== Methods ======================
 * Match request password with hashed in DB
 */
UserSchema.methods.validatePassword = async function (reqPassword) {
  return await bcrypt.compare(reqPassword, this.password);
};

/** Match request password with hashed in DB */
UserSchema.methods.getUser = async function () {
  return await usersSerializer.serializeUser(this);
};

/** Generate signed JWT token. Payload: {id, email} */
UserSchema.methods.getSignedJwtToken = function () {
  return JWT.sign({id: this._id, email: this.email}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = mongoose.model('User', UserSchema);
