const mongoose = require("mongoose");

const CommentsByDate = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  comments: {
    type: Number,
    required: true,
  },
  updatedDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CommentsByDate", CommentsByDate);
