const mongoose = require("mongoose");

const voteSchema = mongoose.Schema({
    voter: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    targetType: { type: String, enum: ["Post", "Reply"], required: true },
    targetId: { type: mongoose.Schema.Types.ObjectId, required: true },
    value: { type: Number, enum: [1, -1], required: true }
},
{
    timestamps: true,
});

voteSchema.index({ voter: 1, targetType: 1, targetId: 1}, { unique: true });

const Vote = mongoose.model("Vote", voteSchema);

module.exports = Vote;