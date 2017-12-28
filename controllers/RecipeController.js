const Recipe = require('../models/Recipe');
const Promise = require('bluebird');

// Export a series of CRUD operations for Recipe resource
module.exports = {

  get: (params, isRaw) => {
    return new Promise((resolve, reject) => {
      
      let filters = {
        sort: {timestamp: -1}
      };

      Recipe.find(params, null, filters, (err, recipes) => {
        if (err){
          reject(err);
          return;
        }

        if (isRaw){
          resolve(recipes);
          return;
        } else {
          let list = [];
          recipes.forEach((recipe) => {
            list.push(recipe.summary())
          });

          resolve(list);
          return;
        }
      });
    });
  },

  getById: (id, isRaw) => {
    return new Promise((resolve, reject) => {
      Recipe.findById(id, (err, recipe) => {
        if (err){
          reject(err)
          return;
        }

        if (isRaw){
          resolve(recipe);
          return;
        } else {
          resolve(recipe.summary());
          return;
        }
      });
    });
  },

  create: (params, isRaw) => {
    return new Promise((resolve, reject) => {
      Recipe.create(params, (err, recipe) => {
        if (err){
          reject(err);
          return;
        }

        if (isRaw){
          resolve(recipe);
          return;
        } else {
          resolve(recipe.summary());
          return;
        }
      });
    });
  },

  update: (id, params, isRaw) => {
    return new Promise((resolve, reject) => {
      Recipe.findByIdAndUpdate(id, params, {new: true}, (err, recipe) => {
        if (err){
          reject(err);
          return;
        }

        if (isRaw){
          resolve(recipe);
          return;
        } else {
          resolve(recipe.summary());
          return;
        }
      });
    });
  },

  destroy: (id, isRaw) => {
    // DESTROY (DELETE)
  }

};