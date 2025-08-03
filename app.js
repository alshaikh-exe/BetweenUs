const express = require("express");
const morgan = require("morgan");
const jsxEngine = require("jsx-view-engine");
const methodOverride = require("method-override");
const userRoutes = require("./controllers/auth/routeController");
const feedRoutes = require("./controllers/feed/routeController");
const replyRoutes = require("./controllers/replies/routeController");
const voteRoutes = require("./controllers/votes/routeController");
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(methodOverride("_method")); 
app.use((req, res, next) => {
    res.locals.data = {};
    next();
});

app.use(express.static("public"));
app.use(morgan("dev"));
app.use("/users", userRoutes);
app.use("/", feedRoutes);
app.use("/replies", replyRoutes);
app.use("/votes", voteRoutes);

module.exports = app;