const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    color: { type: String, required: true },
    identifier: { type: Number, required: true, unique: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;