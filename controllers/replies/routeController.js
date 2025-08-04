const express = require("express");
const dataController = require("./dataController");
const viewController = require("./viewController");
const userDataController = require("../../controllers/auth/dataController");
const router = express.Router({ mergeParams: true });




// New

// Delete
router.delete("/:replyId", userDataController.auth, dataController.deleteReply, viewController.redirectToPost)

// Update
router.put("/:replyId",userDataController.auth, dataController.updateReply, viewController.redirectToPost)

// Create
router.post("/", userDataController.auth, dataController.createReply, viewController.redirectToPost)

// Edit
router.get("/:replyId/edit", dataController.getReply, viewController.editReply)

// Show





module.exports = router;