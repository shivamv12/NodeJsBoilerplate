/** NPM Packages */
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

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

/** Adding an Index on email & make it unique. */
UserSchema.index({email: 1}, {unique: true});

UserSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err.message);
  }
});

module.exports = mongoose.model('User', UserSchema);
