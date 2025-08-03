const express = require("express");
const router = express.Router();
const viewController = require("./viewController");
const dataController = require("./dataController");
const userDataController = require("../auth/dataController");

// Index
router.get("/", userDataController.auth, dataController.index, viewController.showFeed)

// New
router.get("/post/new", userDataController.auth, viewController.newPost);

// Delete
router.delete("/post/:id", userDataController.auth, dataController.deletePost, viewController.redirectToHome)

// Update
router.put("/post/:id", userDataController.auth, dataController.updatePost, viewController.redirectToHome)

// Create
router.post("/", userDataController.auth, dataController.createPost, viewController.redirectToHome)

// Edit
router.get("/post/edit/:id", userDataController.auth, dataController.showPost, viewController.editPost)

// Show
router.get("/asks", userDataController.auth, dataController.asks, viewController.showAsks);
router.get("/feels", userDataController.auth, dataController.feels, viewController.showFeels);
router.get("/post/:id", userDataController.auth, dataController.showPost, viewController.showPost)


module.exports = router;