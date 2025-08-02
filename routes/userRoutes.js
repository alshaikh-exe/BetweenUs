const express = require("express");
const router = express.Router();
const userController = require("../controllers/auth/dataController");
const viewController = require("../controllers/auth/viewController");

router.get("/signup", viewController.signUp)
router.post("/signup", userController.createUser, viewController.redirectToLogin);

router.get("/login", viewController.login);
router.post("/login", userController.loginUser, viewController.redirectToHome);

module.exports = router;