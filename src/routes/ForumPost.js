const express = require("express");
const ForumPostController = require("../controllers/ForumPost");
const validate = require("../middlewares/validate");
const { checkRole } = require('../middlewares/auth');
const ForumPostScheme = require("../schemes/ForumPost");
const passport = require('../config/passport');

const router = express.Router();

router.post("/", 
    passport.authenticate('jwt', { session: false }), 
    checkRole(['admin', 'user']),
    validate(ForumPostScheme.create), 
    ForumPostController.createPost);

router.get("/", 
    ForumPostController.getAllPosts);

router.get("/:id", 
    ForumPostController.getPostById);

router.put("/:id", 
    passport.authenticate('jwt', { session: false }), 
    checkRole(['admin', 'user']),
    validate(ForumPostScheme.update), 
    ForumPostController.updatePost);

router.delete("/:id", 
    passport.authenticate('jwt', { session: false }), 
    checkRole(['admin', 'user']),
    ForumPostController.deletePost);

// router.get("/:id/comments", 
//     ForumPostController.getCommentsByPostId);

module.exports = router;
