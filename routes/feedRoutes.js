const express = require("express");
const router = express.Router();
const viewController = require("../controllers/feed/viewController");

router.get("/", viewController.showFeed)

router.get("/asks", viewController.showAsks);
router.get("/feels", viewController.showFeels);

module.exports = router;