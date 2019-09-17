const router = require("express").Router();
const checkSession = require("../middleware/checkSession");
const requiresLogin = require("../middleware/requiresLogin");
const userController = require("../resources/user/user.controller");

router.use(checkSession);
router.use(requiresLogin);
router.get("/users", userController.getUsers);

module.exports = router;
