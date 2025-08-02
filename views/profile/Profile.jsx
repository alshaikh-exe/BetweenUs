const React = require("react");

function Profile (props) {
    const user = props.user;
    return (
        <div>
            <h1>{user.name}'s Page</h1>
        </div>
    )
};

module.exports = Profile;