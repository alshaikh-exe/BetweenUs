const User = require("../../models/user")
const Post = require("../../models/post");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
    try {
        let token;
        if (req.query.token) {
            token = req.query.token;
        }
        else {
            token = req.header("Authorization").replace("Bearer ", "");
        }
        const data = jwt.verify(token, "secret");
        const user = await User.findOne({ _id: data._id });
        if (!user) {
            throw new Error();
        }
        req.user = user;
        res.locals.data.token = token;
        next();
    }
    catch (error) {
        res.render("auth/Login", { message: "Please sign in first."});
    }
}

exports.createUser = async (req, res, next) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.password || !req.body.color) {
            return res.status(400).json({ message: "Missing required credentials"});
        }
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        const count = await User.countDocuments();
        const idCounter = count + 1;
        
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
            color: req.body.color,
        });
        await user.save();
        const token = await user.generateAuthToken();
        res.locals.data.token = token;
        req.user = user;
        next();
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.loginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || !await bcrypt.compare(req.body.password, user.password)) {
            res.status(400).send("Invalid Login Credentials");
        }
        else {
            const token = await user.generateAuthToken();
            res.locals.data.token = token;
            req.user = user;
            next();
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.getProfile = async (req, res, next) => {
    try {
        const posts = await Post.find({ author: req.user._id }).populate("author", "shortId");
        res.locals.data.userPosts = {
            user: req.user,
            posts
        }
        res.locals.data.token = req.query.token;
        next();
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}