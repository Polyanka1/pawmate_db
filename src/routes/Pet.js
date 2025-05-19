const express = require("express");
const PetController = require("../controllers/Pet");
const validate = require("../middlewares/validate");
const { checkRole } = require('../middlewares/auth');
const PetScheme = require("../schemes/Pet");
const passport = require('../config/passport');

const router = express.Router();

router.post("/", 
    passport.authenticate('jwt', { session: false }), 
    checkRole(['admin', 'user']),
    validate(PetScheme.create), 
    PetController.createPet);

router.get("/:id", 
    passport.authenticate('jwt', { session: false }), 
    checkRole(['admin', 'user']),
    PetController.getPetById);

router.put("/:id", 
    passport.authenticate('jwt', { session: false }), 
    checkRole(['admin', 'user']),
    validate(PetScheme.update), 
    PetController.updatePet);

router.delete("/:id", 
    passport.authenticate('jwt', { session: false }), 
    checkRole(['admin', 'user']),
    PetController.deletePet);

module.exports = router;
