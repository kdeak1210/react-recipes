const mongoose = require('mongoose');
const StepSchema = require('./Step')

const RecipeSchema = mongoose.Schema({
  author: {type: mongoose.SchemaTypes.Mixed, default: ''},  
  title: {type: String, default: ''},
  image: {type: String, default: ''},
  description: {type: String, default: ''},
  steps: [StepSchema],  // A recipe has an indetemrinate numebr of steps
  timestamp: {type: Date, default: Date.now()}
});

RecipeSchema.methods.summary = function(){
  const summary = {
    author: this.author,
    title: this.title,
    image: this.image,
    description: this.description,
    steps: this.steps,
    timestamp: this.timestamp,
    id: this._id.toString()
  };

  return summary;
}

module.exports = mongoose.model('RecipeSchema', RecipeSchema);