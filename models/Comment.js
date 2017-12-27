const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  profile: {type: mongoose.SchemaTypes.Mixed, default: {}},
  recipe: {type: String, default: ''},
  body: {type: String, default: ''},
  timestamp: {type: Date, default: Date.now}
});

CommentSchema.methods.summary = function(){
  const summary = {
    profile: this.profile,
    recipe: this.recipe,
    body: this.body,
    timestamp: this.timestamp,
    id: this._id.toString()
  }

  return summary;
}

module.exports = mongoose.model('CommentSchema', CommentSchema);