const React = require("react");

function Profile (props) {
    const user = props.userPosts.user;
    const posts = props.userPosts.posts
    const token = props.token;

    return (
        <div>
            <a href={`/?token=${token}`}>Back to home page</a>
            <h1>{user.name}'s Profile</h1>
            <h2>{user.shortId}</h2>
            <h4>My Posts</h4>
            <ul>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <li>
                        {`${post.type}: ${post.title}`}
                        <br/>
                        <a href={`/post/${post._id}?token=${token}`}>{post.text}</a>
                        <br/>
                        Votes: {post.votes}
                        </li>
                        ))
                    ) : (
                    <p>You haven't posted anything yet.</p>
                )}
            </ul>
        </div>
    )
}

module.exports = Profile;