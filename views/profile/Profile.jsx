const React = require("react");
const Layout = require("../Layouts/Layout")

function Profile (props) {
    const user = props.userProfile.user;
    const posts = props.userProfile.posts;
    const replies = props.userProfile.replies;
    const token = props.token;

    return (
          <Layout>
        <div className="profile-container">
            <a href={`/?token=${token}`} className="back-link">Back to Home Page</a>
            <div className="profile-header">
                <div 
                    className="user-profile-pic" 
                    style={{ backgroundColor: user.color }}
                ></div>
                <div>
                    <h1 className="profile-name">{user.name}</h1>
                    <h2 className="profile-shortid">{user.shortId}</h2>
                </div>
            </div>

            <a href={`/post/new?token=${token}`} className="btn create-post-btn" style={{ backgroundColor: user.color }}>Create New Post</a> 

            <div className="profile-section">
                <h3>My Posts</h3>
                <ul>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            post && post.author ? (
                            <li className="post">
                                <div className={`post-type ${post.type}`}>
                                    {post.type === "ask" ? "Ask" : "Feel"}
                                </div>
                                <div className="post-inner">
                                    <h4 className="post-title">{post.title}</h4>
                                    <p className="post-content">
                                        <a href={`/post/${post._id}?token=${token}`}>
                                            {post.text}
                                        </a>
                                    </p>
                                </div>
                            </li>
                            ) : null
                        ))
                    ) : (
                        <p>You haven't posted anything yet.</p>
                    )}
                </ul>
            </div>

            <div className="profile-section">
                <h3>My Replies</h3>
                <ul>
                    {replies.length > 0 ? (
                        replies.map((reply) => (
                            reply && reply.post ? (
                            <li className="reply-post">
                                <div className="reply-header">
                                </div>
                                <p className="reply-text">{reply.text}</p>
                                <a 
                                    href={`/post/${reply.post._id}?token=${token}`} 
                                    className="reply-link"
                                >
                                    {reply.post.title}
                                </a>
                            </li>
                            ) : null
                        ))
                    ) : (
                        <p>You haven't replied to anything yet.</p>
                    )}
                </ul>
            </div>
        </div>
        </Layout>
    );
}

module.exports = Profile;