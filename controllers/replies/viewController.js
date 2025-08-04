
const viewController = {
    redirectToPost (req, res) {
        res.redirect(`/post/${req.params.id}?token=${req.query.token}&t=${Date.now()}`)
    },
    editReply (req, res) {
        res.render("replies/Edit", res.locals.data)
    }
}

module.exports = viewController;