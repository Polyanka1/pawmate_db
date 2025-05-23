const express = require("express");
const CommentController = require("../controllers/Comment");
const validate = require("../middlewares/validate");
const { checkRole } = require('../middlewares/auth');
const CommentScheme = require("../schemes/Comment");
const passport = require('../config/passport');

const router = express.Router();

router.post("/", 
    validate(CommentScheme.create), 
    CommentController.createComment);

router.get("/:id", 
    passport.authenticate('jwt', { session: false }),
    checkRole(['admin', 'user']), 
    CommentController.getCommentById);

router.delete("/:id", 
    CommentController.deleteComment);

router.get("/:id/comments", 
    CommentController.getCommentsByPostId);

module.exports = router;
