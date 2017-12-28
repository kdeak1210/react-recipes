const Profile = require('../models/Profile');
const Promise = require('bluebird');
const bcrypt = require('bcryptjs');

// Export a series of CRUD operations for Profile resource
module.exports = {

  get: (params, isRaw) => {
    return new Promise((resolve, reject) => {
      Profile.find(params, (err, profiles) => {
        if (err){
          reject(err);
          return;
        }

        if (isRaw){
          resolve(profiles);
          return;
        } else {
          let list = [];
          profiles.forEach((profile) => {
            if (profile != null)
              list.push(profile.summary())
          });

          resolve(list);
          return;
        }
      });
    });
  },

  getById: (id, isRaw) => {
    return new Promise((resolve, reject) => {
      Profile.findById(id, (err, profile) => {
        if (err){
          reject(err);
          return;
        }

        if (profile == null){
          resolve(null);
          return;
        }

        if (isRaw){
          resolve(profile);
          return;
        } else {
          resolve(profile.summary());
          return;
        }
      });
    });
  },

  create: (params, isRaw) => {
    return new Promise((resolve, reject) => {

      // Salt the password property with bcrypt
      if (params['password']){
        params['password'] = bcrypt.hashSync(params.password, 10)
      }
        
      Profile.create(params, (err, profile) => {     
        if (err){
          reject(err);
          return;
        }

        if (isRaw){
          resolve(profile);
          return;
        } else {
          resolve(profile.summary());
          return;
        }
      });
    });
  },

  update: (id, params, isRaw) => {
    return new Promise((resolve, reject) => {
      Profile.findByIdAndUpdate(id, params, {new: true}, (err, profile) => {
        if (err){
          reject(err);
          return;
        }

        if (isRaw){
          resolve(profile);
          return;
        } else {
          resolve(profile.summary());
          return;
        }
      });
    });
  },

  destroy: (id, isRaw) => {
    // DESTROY (DELETE)
  }

};