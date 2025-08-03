const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    color: { type: String, required: true },
    shortId: { type: Number},
});

userSchema.methods.generateAuthToken = async function() {
    const token = jwt.sign({ _id: this._id }, "secret");
    return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;