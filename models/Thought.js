const { Schema, model } = require('mongoose');
const reactionSchema = require('./reactionSchema')
const dateFormat = require('../utils/helpers')

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: time => dateFormat(time)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtual: true,
      getter: true
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
