const React = require("react");
const Layout = require("../Layouts/Layout");

function Show (props) {
    const token = props.token;
    const post = props.post;
    const user = props.user;
    const replies = props.replies || [];

    return (
        <Layout>
            <div class="header">
                <div class="header-left">
            <a href={`/users/profile?token=${token}`}>
             <div class="user-profile"
                style={{ backgroundColor: user.color}}
            >

            </div>
            </a>

            </div>

            <div class="header-center">
            <h1>
                <a href={`/?token=${token}`} className={`header-title-link ${post.type}-title`}>{post.title}</a>
            </h1>
            </div>

            <div class="header-right">
            <a href="/users/login">Log Out</a>
            </div>
            </div>

        <div class="post">
            <div class={`post-type ${post.type}`}>
                {post.type === "ask" ? "Ask" : "Feel"}
            </div>
            <div class="post-inner">
                <div class="post-header">
                <div class="user-profile-post" style={{ backgroundColor: post.author.color }}></div>
                
                <span class="poster-name">{post.author.shortId}</span>
                </div>

            <h1 class="post-title">{post.title}</h1>
        
            <p class="post-content">
                {post.text}
            </p>
            </div>
            
            { post.author._id.toString() === user._id.toString() 
              ? <div class="post-actions">
              <form action={`/post/${post._id}?_method=DELETE&token=${token}`} method="POST">
                <input type="submit" value="Delete this post" class="btn delete-btn"/>
            </form>
            <a href={`/post/edit/${post._id}/?token=${token}`}>
            <button class="btn edit-btn">Edit this post</button>
            </a>
            </div>
            : ""
            }
            </div>
            <div class="replies-section">
            <h2>Replies</h2>
            {replies.length === 0 ? (
               <p class="empty message">No replies yet. Be the first to reply!</p> 
            ) : (
                replies.map((reply) => (
                    <div class="reply-post">
                        <div class="reply-header">
                            <div
                            class="user-profile-post"
                            style={{ backgroundColor: reply.author.color }}
                            ></div>
                            <span class="poster-name">{reply.author.shortId || "Unknown"}</span>
                            {reply.text && <p class="reply-text">{reply.text}</p>}
                            </div>

                        { reply.author._id.toString() === user._id.toString() 
                        ? <a href={`/post/${post._id}/replies/${reply._id}/edit?token=${token}`} class="reply-edit-link" style={{ color: reply.author.color }}>
                        Edit this reply
                        </a>
                        : ""
                        }
                        </div>
                )
            ))}

            <h3 class="reply-form-title">Add a Reply</h3>
            <form action={`/post/${post._id}/replies?token=${token}`} method="POST" class="reply-form">
            <textarea name="text" placeholder="Write your reply..." required />
            <br/>
            <input type="text" name="image" placeholder="Image URL" />
            <br/>
            <button type="submit" class="btn reply-btn" style={{ backgroundColor: user.color }}>Reply</button>
            </form>
            </div>
        </Layout>
    )
}

module.exports = Show