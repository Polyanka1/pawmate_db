const express = require("express");
const ProfileController = require("../controllers/Profile");
const validate = require("../middlewares/validate");
const { checkRole } = require('../middlewares/auth');
const ProfileScheme = require("../schemes/Profile");
const passport = require('../config/passport');
const upload = require("../middlewares/upload");


const router = express.Router();

router.post("/", 
    passport.authenticate('jwt', { session: false }), 
    checkRole(['admin', 'user']),
    upload.single("photo"), 
    validate(ProfileScheme.create), 
    ProfileController.createProfile);

router.get("/:id", 
    passport.authenticate('jwt', { session: false }), 
    checkRole(['admin', 'user']),
    ProfileController.getProfileById);

router.put("/:id", 
    passport.authenticate('jwt', { session: false }), 
    checkRole(['admin', 'user']),
    upload.single("photo"),
    validate(ProfileScheme.update), 
    ProfileController.updateProfile);

router.delete("/:id", 
    passport.authenticate('jwt', { session: false }), 
    checkRole(['admin', 'user']),
    ProfileController.deleteProfile);

module.exports = router;
