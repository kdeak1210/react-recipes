const mongoose = require('mongoose');
const _ = require('lodash');

const ProfileSchema = mongoose.Schema({
  username: {type: String, lowercase: true,  default: ''},
  password: {type: String, default: ''},
  email: {type: String, lowercase: true, default: ''},
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

// 'pre' middleware validates docs before save: forbid duplicate username/email
ProfileSchema.pre('save', function(next){
  let user = this;
  Profile.find({$or:[{username: user.username}, {email: user.email}]}, (err, users) => {
    if(err){
      return next(err);
    } else if (users.length != 0) {
      if (_.find(users, {email: user.email})){
        user.invalidate('email', 'email is already registered');
        next(new Error('That email is already registered'));
      } else if (_.find(users, { username: user.username})){
        user.invalidate('username', 'username is already taken');
        next( new Error('That username is already taken'));
      }      
    } else {
      next();
    }
  });
});

const Profile =  mongoose.model('ProfileSchema', ProfileSchema);

module.exports = Profile;