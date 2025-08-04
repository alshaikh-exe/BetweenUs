const Reply = require("../../models/reply");
const Post = require("../../models/post");

exports.getReply = async (req, res, next) => {
    try {
        const reply = await Reply.findById(req.params.replyId).populate("post", "_id title");

        if (!req.user || reply.author.toString() !== req.user._id.toString()) {
            return res.status(403).send({ message: "Not authorized to edit this reply"})
        }

        res.locals.data.reply= reply;
        next();
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}

exports.deleteReply = async (req, res, next) => {
    try {
        const reply = await Reply.findById(req.params.replyId);

        if (!req.user || reply.author.toString() !== req.user._id.toString()) {
            return res.status(403).send({ message: "Not authorized to delete this reply"})
        }

        await Reply.findOneAndDelete({ "_id": req.params.replyId })
        .then(() => {
            next();
        });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
};

exports.updateReply = async (req, res, next) => {
    try {
const reply = await Reply.findById(req.params.replyId);

if (reply.author.toString() !== req.user._id.toString()) {
    return res.status(403).send({ message: "Not authorized to edit this reply"})
}

        const updatedReply = await Reply.findByIdAndUpdate(req.params.replyId,  
            {
                text: req.body.text || null,
                image: req.body.image || null,
            },
            { new: true }).populate("author", "shortId");
            res.locals.data.reply = updatedReply;
        next();
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
};

exports.createReply = async (req, res, next) => {
    try {
        console.log("Reply route params:", req.params)
        const reply = new Reply({
            text: req.body.text || null,
            image: req.body.image || null,
            author: req.user._id,
            post: req.params.id
        });
        await reply.save();
        res.locals.data.reply = reply;
        next();
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
