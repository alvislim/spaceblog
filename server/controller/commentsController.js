const Comments = require("../models/Coments");
const httpResponse = require("../utils");

module.exports = {
  postComment: async (req, res) => {
    const { id, commentInput, name } = req.body;
    try {
      let comments = await Comments.find({ name: name.toString() });
      if (comments.length > 0) {
        const arr = comments[0].comments;
        arr.push(commentInput);

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
        const arr = [commentInput];
        comments = new Comments({
          commentId: id,
          comments: arr,
          name: name.toString(),
          date: new Date(),
        });
        await comments.save();
        httpResponse.httpResponse(res, 200, true, "comment have been added");
      }
    } catch (err) {
      console.log(err);
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
