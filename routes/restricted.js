const router = require("express").Router();
const checkToken = require("../middleware/checkToken");
const requiresLogin = require("../middleware/requiresLogin");
const userController = require("../resources/user/user.controller");

router.use(checkToken);
router.use(requiresLogin);
router.get("/users", userController.getUsers);

module.exports = router;
