
const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  name: String
});

const Thought = mongoose.model('Thought', thoughtSchema);
module.exports = Thought;

