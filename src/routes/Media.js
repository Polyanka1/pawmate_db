const express = require("express");
const MediaController = require("../controllers/Media");
const MediaScheme = require("../schemes/Media");

const router = express.Router();

router.get("/:id", 
    MediaController.getMediaById);

module.exports = router;
