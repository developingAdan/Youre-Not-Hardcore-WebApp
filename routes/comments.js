const express = require("express");
const router = express.Router();

const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes - simplified for now

router.post("/createComment/:id", commentsController.createComment);

// here we pass in TWO params that are in the comments Controller line 44 & 46
// "/deleteComment"/ is referenced from line 40 in comments Controller file
router.delete("/deleteComment/:postid/:commentid", commentsController.deleteComment)

module.exports = router;
