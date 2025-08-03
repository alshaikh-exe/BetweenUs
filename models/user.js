const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const colorName = {
    "#ff595e": "Red",
    "#ffca3a": "Yellow",
    "#8ac926": "Green",
    "#1982c4": "Blue",
    "#6a4c93": "Purple",
    "#292f36": "Black",
}

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    color: { type: String, required: true },
    shortId: { type: String, unique: true },
});

userSchema.pre("save", async function (next) {
if (this.isNew) {
    const colorCount = await mongoose.model("User").countDocuments({ color: this.color });
    const color = colorName[this.color];
    this.shortId = `${color}#${colorCount + 1}`;
}
})

userSchema.methods.generateAuthToken = async function() {
    const token = jwt.sign({ _id: this._id }, "secret");
    return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;