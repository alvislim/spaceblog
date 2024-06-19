const Comments = require("../models/Coments");
const httpResponse = require("../utils");

module.exports = {
  postComment: async (req, res) => {
    const { id, commentInput, name } = req.body;
    let commentObj = { name: name, comment: commentInput };
    try {
      let comments = await Comments.find({ commentId: id.toString() });
      if (comments.length > 0) {
        const arr = comments[0].comments;
        arr.push(commentObj);
        await Comments.findByIdAndUpdate(
          comments[0]._id,
          {
            $set: {
              comments: arr,
            },
          },
          { new: true }
        );
        httpResponse.httpResponse(res, 200, true, "comment have been added");
      } else {
        comments = new Comments({
          commentId: id,
          comments: [commentObj],
          name: name.toString(),
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
      let result = await Comments.find({});
      httpResponse.httpResponse(res, 200, true, "comments retrieved", {
        ...result,
      });
    } catch (err) {
      console.log(err);
      httpResponse.httpResponse(res, 500, false, "Server Error");
    }
  },
};
