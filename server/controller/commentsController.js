const Schema = require("../models/Coments");
const httpResponse = require("../utils");

module.exports = {
  postComment: async (req, res) => {
    const { id, commentInput, name } = req.body;
    try {
      let comments = await Schema.findOne({ id });
      if (comments) {
        comments.comments.push(commentInput);
        await comments.save();
        httpResponse.httpResponse(res, 200, true, "comment have been added");
      } else {
        let arr = [];
        arr.push(commentInput);
        comments = new Schema({
          commentId: id,
          comments: arr,
          name: name,
          date: new Date(),
        });

        await comments.save();
        httpResponse.httpResponse(res, 200, true, "comment have been added");
      }
    } catch (err) {
      httpResponse.httpResponse(res, 500, false, "Server Error", commentInput);
    }
  },
  getAllComments: async (req, res) => {
    try {
      let result = await Schema.find();
      httpResponse.httpResponse(res, 200, true, "comments retrieved", result);
    } catch (err) {
      httpResponse.httpResponse(res, 500, false, "Server Error");
    }
  },
};
