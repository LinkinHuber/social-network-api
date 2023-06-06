const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 240,
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },

    username: {
        type: String,
        required: true,
    },

    reactions: [reactionSchema],
});

thoughtSchema.virtual('reactionCount').get(function(){
    return `${this.reactions.length}`;
});

const Thought = mongoose.model('Thought', thoughtSchema);
module.exports = Thought;