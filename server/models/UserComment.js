const mongoose = require("mongoose");

const UserComment = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  comments: {
    type: [String],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserComment", UserComment);
