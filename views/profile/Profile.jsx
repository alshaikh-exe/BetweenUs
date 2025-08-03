const React = require("react");

function Profile (props) {
    const user = props.userPosts.user;
    const posts = props.userPosts.posts
    const token = props.token;

    return (
        <div>
            <a href={`/?token=${token}`}>Back to home page</a>
            <h1>{user.name}'s Page</h1>
        </div>
    )
};

module.exports = Profile;