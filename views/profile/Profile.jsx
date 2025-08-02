const React = require("react");

function Profile (props) {
    const user = props.user;
    return (
        <div>
            <a href="/">Back to home page</a>
            <h1>{user.name}'s Page</h1>
        </div>
    )
};

module.exports = Profile;