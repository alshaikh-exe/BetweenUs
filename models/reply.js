const mongoose = require("mongoose");

const replySchema = mongoose.Schema({
    text: { type: String, required: true },
    image: { type: String },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
},
{
    timestamps: true,
});

const Reply = mongoose.model("Reply", replySchema);

module.exports = Reply;