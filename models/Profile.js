const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
  username: {type: String, default: ''},
  password: {type: String, default: ''},
  email: {type: String, default: ''},
  city: {type: String, default: ''},
  gender: {type: String, default: ''},
  image: {type: String, default: ''},
  timestamp: {type: Date, default: Date.now()}
});

// Adding a summary method to the Schema makes it possible to hide the password
ProfileSchema.methods.summary = function(){
  const summary = {
    username: this.username,
    email: this.email,
    city: this.city,
    gender: this.gender,
    image: this.image,
    timestamp: this.timestamp,
    id: this._id.toString()
  };

  return summary;
}

module.exports = mongoose.model('ProfileSchema', ProfileSchema);