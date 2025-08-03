const Post = require("../../models/post")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.index = async (req, res, next) => {
    try {
        res.locals.data.posts = await Post.find({}).populate("author", "color");
        next();
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}

exports.createPost = async (req, res, next) => {
    try {
        const post = new Post({
            type: req.body.postType,
            title: req.body.title,
            text: req.body.text,
            image: req.body.image,
            author: req.user._id,
            votes: 0,
        });
        await post.save();
        next();
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}