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

exports.deletePost = async (req, res, next) => {
    try {
        await Post.findOneAndDelete({ "_id": req.params.id })
        .then(() => {
            next();
        });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
};

exports.updatePost = async (req, res, next) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id,  
            {
                type: req.body.type,
                title: req.body.title,
                image: req.body.image,
                text: req.body.text,
            },
            { new: true }).populate("author", "color");
            res.locals.data.post = updatedPost;
        next();
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
};

exports.createPost = async (req, res, next) => {
    try {
        const post = new Post({
            type: req.body.type,
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

exports.showPost = async (req, res, next) => {
    try {
        res.locals.data.post = await Post.findById(req.params.id).populate("author", "color")
        if (!res.locals.data.post) {
            throw new Error(`No post with id ${req.params.id} in our database`);
        }
        next();
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }
};

exports.asks = async (req, res, next) => {
    try {
        res.locals.data.posts = await Post.find({ type: "ask" }).populate("author", "color")
        next();
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }
}

exports.feels = async (req, res, next) => {
    try {
        res.locals.data.posts = await Post.find({ type: "feel" }).populate("author", "color")
        next();
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }
}



