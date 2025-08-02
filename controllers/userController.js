const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.password || !req.body.color) {
            return res.status(400).json({ message: "Missing required credentials"});
        }
        const user = new User(req.body);
        await user.save();
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};