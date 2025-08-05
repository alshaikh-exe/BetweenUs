const React = require("react");

function Profile (props) {
    const user = props.userProfile.user;
    const posts = props.userProfile.posts;
    const replies = props.userProfile.replies;
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
                        </li>
                        ))
                    ) : (
                    <p>You haven't posted anything yet.</p>
                )}
            </ul>
            <h4>My Replies</h4>
            <ul>
                 {replies.length > 0 ? (
                    replies.map((reply) => (
                        <li>
                        {`${reply.text}`}
                        <br/>
                        <a href={`/post/${reply.post._id}?token=${token}`}>
                        {reply.post.title}
                        </a>
                        </li>
                        ))
                    ) : (
                    <p>You haven't replied to anything yet.</p>
                )}
            </ul>
        </div>
    )
}

module.exports = Profile;