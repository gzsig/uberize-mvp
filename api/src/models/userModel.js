const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  given_name: String,
  family_name: String,
  picture: String,
  tokens: Object,

},
  {
    timestamps: true
  });

const User = mongoose.model('User', userSchema);
module.exports = { User };