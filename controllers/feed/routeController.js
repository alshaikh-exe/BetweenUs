const express = require("express");
const router = express.Router();
const viewController = require("./viewController");
const dataController = require("./dataController");
const userDataController = require("../auth/dataController");

router.get("/", userDataController.auth, dataController.index, viewController.showFeed)

router.get("/asks", userDataController.auth, viewController.showAsks);
router.get("/feels", userDataController.auth, viewController.showFeels);

router.get("/feed/new", userDataController.auth, viewController.newPost);
router.post("/", userDataController.auth, dataController.createPost, viewController.redirectToHome)

module.exports = router;