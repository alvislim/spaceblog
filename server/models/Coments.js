const mongoose = require("mongoose");

const CommentsArraySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

const CommentsSchema = new mongoose.Schema({
  commentId: {
    type: String,
    required: true,
  },
  comments: {
    type: [CommentsArraySchema],
    required: true,
    default: [],
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comments", CommentsSchema);
