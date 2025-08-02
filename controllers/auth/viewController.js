
const viewController = {
    signUp (req, res, next) {
        res.render("auth/SignUp");
    },
    login (req, res, next) {
        res.render("auth/Login");
    },
    redirectToLogin (req, res, next) {
        res.redirect("/users/login");
    },
    redirectToHome (req, res, next) {
        res.redirect("/");
    },
    showProfile (req, res) {
        res.render("profile/Profile", res.locals.data);
    }
}

module.exports = viewController;