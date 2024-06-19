const express = require("express");
const router = express.Router();
const healthCheck = require("../controller/healthCheck");

router.get("/", healthCheck.healthCheck);

module.exports = router;
