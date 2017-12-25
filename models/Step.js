/** 'Step' will not be its own model, but instead part of the Recipe Schema.
 *  The RecipeSchema will have an array of subdocuments [stepschema]
 */
const mongoose = require('mongoose');

const StepSchema = mongoose.Schema({
  directions: {type: String, default: ''},
  duration: {type: String, default: 0},
  image: {type: String, default: ''},
  timestamp: {type: Date, default: Date.now()}
});

StepSchema.methods.summary = function(){
  const summary = {
    directions: this.directions,    
    image: this.image,
    timestamp: this.timestamp,
    id: this._id.toString()
  };

  return summary;
}

module.exports = StepSchema;