const express = require("express");
const router = express.Router();
const dataController = require("./dataController");
const viewController = require("./viewController");

router.get("/signup", viewController.signUp)
router.post("/signup", dataController.createUser, viewController.redirectToLogin);

router.get("/login", viewController.login);
router.post("/login", dataController.loginUser, viewController.redirectToHome);

router.get("/profile", dataController.auth, dataController.getProfile, viewController.showProfile);

module.exports = router;