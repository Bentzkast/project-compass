const express = require("express");
const router = express.Router();

// @route   GET api/posts/test
// @desc    Test posts route
// @access  Public
router.get("/test", (req, res) => res.json({ posts: "posts works" }));

module.exports = router;
