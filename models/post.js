const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    type: { type: String, required: true },
    image: { type: String },
    title: { type: String, required: true },
    text: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    votes: { type: Number, required: true, default: 0},
},
{
    timestamps: true,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;