const express = require("express");
const UserController = require("../controllers/User");
const validate = require("../middlewares/validate");
const { checkRole } = require('../middlewares/auth');
const UserScheme = require("../schemes/User");
const passport = require('../config/passport');

const router = express.Router();

router.post("/", 
    passport.authenticate('jwt', { session: false }),  
    checkRole(['admin']),
    validate(UserScheme.create), 
    UserController.createUser);

router.get("/", 
    passport.authenticate('jwt', { session: false }),  
    checkRole(['admin']),
    UserController.getAllUsers);

router.get("/:id", 
    passport.authenticate('jwt', { session: false }),  
    checkRole(['admin']),
    UserController.getUserById);

router.put("/:id", 
    passport.authenticate('jwt', { session: false }),  
    checkRole(['admin']),
    validate(UserScheme.update), 
    UserController.updateUser);

router.delete("/:id", 
    passport.authenticate('jwt', { session: false }),  
    checkRole(['admin']),
    UserController.deleteUser);

module.exports = router;
