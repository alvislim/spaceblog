const Comments = require("../models/Coments");
const CommentsDate = require("../models/CommentsByDate");
const UserComment = require("../models/UserComment");
const httpResponse = require("../utils");

module.exports = {
  postComment: async (req, res) => {
    const { id, commentInput, name } = req.body;
    const date = new Date();
    const dateString = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`;

    let commentObj = { name: name, comment: commentInput, date: date };
    try {
      let comments = await Comments.findOne({ commentId: id.toString() });
      let userComment = await UserComment.findOne({
        userName: name.toLowerCase(),
      });
      let commentsDate = await CommentsDate.findOne({ date: dateString });

      if (comments) {
        const arr = comments.comments;
        arr.push(commentObj);
        await Comments.findByIdAndUpdate(
          comments._id,
          {
            $set: {
              comments: arr,
            },
          },
          { new: true }
        );
      }
      if (userComment) {
        await UserComment.findOneAndUpdate(
          {
            userName: name,
          },
          {
            comments: userComment.comments + 1,
          }
        );
      }
      if (commentsDate) {
        await CommentsDate.findOneAndUpdate(
          {
            date: dateString,
          },
          { comments: commentsDate.comments + 1 }
        );
      }
      if (!userComment) {
        userComment = new UserComment({
          userName: name,
          comments: 1,
        });
        await userComment.save();
      }

      if (!commentsDate) {
        commentsDate = new CommentsDate({
          date: dateString,
          comments: 1,
        });
        await commentsDate.save();
      }

      if (!comments) {
        comments = new Comments({
          commentId: id,
          comments: [commentObj],
          name: name.toString(),
        });
        await comments.save();
      }

      httpResponse.httpResponse(res, 200, true, "comment have been added");
    } catch (err) {
      console.log(err);
      httpResponse.httpResponse(res, 500, false, "Server Error", commentInput);
    }
  },

  getAllComments: async (req, res) => {
    try {
      // await UserComment.deleteMany();
      // await CommentsDate.deleteMany();
      // await Comments.deleteMany();
      let result = await Comments.find({});
      httpResponse.httpResponse(res, 200, true, "comments retrieved", result);
    } catch (err) {
      console.log(err);
      httpResponse.httpResponse(res, 500, false, "Server Error");
    }
  },

  getMatrix: async (req, res) => {
    try {
      let userCommentRes = await UserComment.find({});
      let dateComment = await CommentsDate.find({});
      httpResponse.httpResponse(res, 200, true, "Matrix Sent", {
        userComment: userCommentRes,
        dateComment: dateComment,
      });
    } catch (error) {
      console.log(err);
      httpResponse.httpResponse(res, 500, false, "Server Error");
    }
  },
};
