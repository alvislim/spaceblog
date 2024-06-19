const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
  commentId: {
    type: String,
    required: true,
  },
  comments: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comments", CommentsSchema);
