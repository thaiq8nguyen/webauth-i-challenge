const router = require("express").Router();
const validateLoginBody = require("../middleware/validateLoginBody");
const validateRegistrationBody = require("../middleware/validateRegistrationBody");
const authController = require("../resources/auth/auth.controller");

router.post("/login", validateLoginBody, authController.login);

router.post("/register", validateRegistrationBody, authController.register);

module.exports = router;
