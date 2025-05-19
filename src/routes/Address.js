const express = require("express");
const AddressController = require("../controllers/Address");
const validate = require("../middlewares/validate");
const { checkRole } = require('../middlewares/auth');
const AddressScheme = require("../schemes/Address");
const passport = require('../config/passport');

const router = express.Router();

router.post("/", 
    passport.authenticate('jwt', { session: false }),
    checkRole(['admin', 'user']), 
    validate(AddressScheme.create), 
    AddressController.createAddress);

router.get("/:id", 
    passport.authenticate('jwt', { session: false }),
    checkRole(['admin', 'user']), 
    AddressController.getAddressById);

router.put("/:id", 
    passport.authenticate('jwt', { session: false }), 
    checkRole(['admin', 'user']),
    validate(AddressScheme.update), 
    AddressController.updateAddress);

router.delete("/:id", 
    passport.authenticate('jwt', { session: false }),
    checkRole(['admin', 'user']), 
    AddressController.deleteAddress);

module.exports = router;
