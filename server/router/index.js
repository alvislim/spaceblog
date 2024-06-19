const express = require("express");
const router = express.Router();
const healthCheck = require("../controller/healthCheck");
const comments = require("../controller/commentsController");

router.get("/", healthCheck.healthCheck);
router.get("/getComments", comments.getAllComments);
router.post("/postComment", comments.postComment);

module.exports = router;
