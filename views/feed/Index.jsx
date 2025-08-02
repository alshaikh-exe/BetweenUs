const React = require("react");

function Index (props) {
    return (
        <div>
            <a href="/users/profile">My Profile</a>
            <h1>Index Page</h1>
            <a href="/asks">Asks</a>
            <br />
            <a href="/feels">Feels</a>
        </div>
    )
};

module.exports = Index;