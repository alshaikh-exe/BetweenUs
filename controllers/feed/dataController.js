const Post = require("../../models/post")
const Reply = require("../../models/reply");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.index = async (req, res, next) => {
    try {
        res.locals.data.posts = await Post.find({}).populate("author", "shortId").sort({ createdAt: -1 })
        next();
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}

exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.author.toString() !== req.user._id.toString()) {
            return res.status(403).send({ message: "Not authorized to delete this post"})
        }

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
         const post = await Post.findById(req.params.id);

        if (!req.user || post.author.toString() !== req.user._id.toString()) {
            return res.status(403).send({ message: "Not authorized to edit this post"})
        }

        const updatedPost = await Post.findByIdAndUpdate(req.params.id,  
            {
                type: req.body.type,
                title: req.body.title,
                image: req.body.image,
                text: req.body.text,
            },
            { new: true }).populate("author", "shortId")
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
        
        res.locals.data.post = await Post.findById(req.params.id).populate("author", "shortId _id")
        if (!res.locals.data.post) {
            throw new Error(`No post with id ${req.params.id} in our database`);
        }

        if(req.path.includes("edit")) {
            if (!req.user || post.author.toString() !== req.user._id.toString()) {
            return res.status(403).send({ message: "Not authorized to edit this post"})
        }
        }

        const replies = await Reply.find({ post: req.params.id }).populate("author", "shortId").sort({ createdAt: -1 })
        console.log("Replies fetched:", replies.length);
        res.locals.data.replies = replies;
        next();
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }
};

exports.asks = async (req, res, next) => {
    try {
        res.locals.data.posts = await Post.find({ type: "ask" }).populate("author", "shortId").sort({ createdAt: -1 })
        next();
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }
}

exports.feels = async (req, res, next) => {
    try {
        res.locals.data.posts = await Post.find({ type: "feel" }).populate("author", "shortId").sort({ createdAt: -1 })
        next();
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }
}



