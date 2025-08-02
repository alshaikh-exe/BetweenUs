const express = require("express");
const router = express.Router();
const viewController = require("../controllers/feed/viewController");

router.get("/", viewController.showFeed)

module.exports = router;