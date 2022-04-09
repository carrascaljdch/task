const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
  local: {
    email: { type: String, required: true},
    password: { type: String, required: true}

  },
  facebook: {
    id: { type: String, required: true},
    token: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true}
  },
  google: {
    id: { type: String, required: true},
    token: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true}
  }
});

// generating a hash
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};

// create the model for user and expose it to our app
module.exports = mongoose.model('User', userSchema);