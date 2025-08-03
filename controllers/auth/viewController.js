
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
        if (res.locals.data.token) {
            res.redirect(`/?token=${res.locals.data.token}`);
        } else {
            res.redirect("/");
        }
    },
    showProfile (req, res) {
        res.render("profile/Profile", res.locals.data);
    }
}

module.exports = viewController;