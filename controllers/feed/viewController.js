
const viewController = {
    showFeed (req, res) {
        res.render("feed/Index")
    },
    showAsks (req, res) {
        res.render("feed/Asks");
    },
    showFeels (req, res) {
        res.render("feed/Feels");
    },
}

module.exports = viewController;