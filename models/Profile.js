const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
  username: {type: String, default: ''},
  password: {type: String, default: ''},
  email: {type: String, default: ''},
  bio: {type: String, default: ''},
  city: {type: String, default: ''},
  website: {type: String, default: ''},
  image: {type: String, default: ''},
  timestamp: {type: Date, default: Date.now()}
});

// Adding a summary method to the Schema makes it possible to hide the password
ProfileSchema.methods.summary = function(){
  const summary = {
    username: this.username,
    email: this.email,
    bio: this.bio,
    city: this.city,
    website: this.website,
    image: this.image,
    timestamp: this.timestamp,
    id: this._id.toString()
  };

  return summary;
}

module.exports = mongoose.model('ProfileSchema', ProfileSchema);