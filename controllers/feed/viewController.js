
const viewController = {
    showFeed (req, res) {
        res.render("feed/Index", res.locals.data)
    },
    showAsks (req, res) {
        res.render("feed/Asks", res.locals.data);
    },
    showFeels (req, res) {
        res.render("feed/Feels", res.locals.data);
    },
    newPost (req, res) {
        res.render("posts/New", res.locals.data);
    },
    editPost (req, res) {
        res.render("posts/Edit", res.locals.data);
    },
    showPost (req, res) {
        res.render("posts/Show", res.locals.data)
    },
    redirectToHome (req, res) {
        res.redirect(`/?token=${res.locals.data.token}`);
    }
}


module.exports = viewController;