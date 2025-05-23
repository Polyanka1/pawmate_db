const express = require("express");
const ServiceController = require("../controllers/Service");
const validate = require("../middlewares/validate");
const { checkRole } = require('../middlewares/auth');
const ServiceScheme = require("../schemes/Service");
const passport = require('../config/passport');

const router = express.Router();

router.post("/", 
    passport.authenticate('jwt', { session: false }),  
    checkRole(['admin', 'user']),
    validate(ServiceScheme.create), 
    ServiceController.createService);

router.get("/", 
    ServiceController.getAllServices);

    //http://localhost:3000/services/search?title=ремонт
router.get("/search", 
    ServiceController.getServiceByName);

router.get("/:id", 
    ServiceController.getServiceById);

router.put("/:id", 
    passport.authenticate('jwt', { session: false }),  
    checkRole(['admin', 'user']),
    validate(ServiceScheme.update), 
    ServiceController.updateService);

router.delete("/:id", 
    passport.authenticate('jwt', { session: false }),  
    checkRole(['admin', 'user']),
    ServiceController.deleteService);

module.exports = router;
