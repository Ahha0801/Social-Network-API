const { Schema, model } = require('mongoose');
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
    startDate: {
      type: Date,
      default: Date.now(),
    },
    endDate: {
      type: Date,
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
