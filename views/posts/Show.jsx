const React = require("react");

function Show (props) {
    const token = props.token;
    const post = props.post;
    const replies = props.replies || [];
        console.log("Replies in Show.jsx:", replies)
    return (
        <div>
            <h1>{post.title}</h1>
            <a href={`/?token=${token}`}>Go back to Home Page</a>
            <p>
                Type: {post.type}
                <br/>
                Text: {post.text}
                <br/>
                Image: {post.image}
                <br/>
            </p>
              <form action={`/post/${post._id}?_method=DELETE&token=${token}`} method="POST">
                <input type="submit" value="Delete this post"/>
            </form>
            <div>
            <a href={`/post/edit/${post._id}/?token=${token}`}>
            <button>Edit this post</button>
            </a>

            <h2>Replies</h2>
            {replies.length === 0 ? (
               <p>No replies yet. Be the first to reply!</p> 
            ) : (
                replies.map((reply) => (
                    <div>
                        {reply.text && <p>{reply.text}</p>}
                        {reply.image && (
                            <img src={reply.image} alt="Reply" />
                        )}
                        <small>
                            by {reply.author.shortId}
                            {/* {new Date(reply.createdAt).toLocaleString()} */}
                        </small>
                        <a href={`/post/${post._id}/replies/${reply._id}/edit?token=${token}`}>
                        Edit this reply
                        </a>
                        </div>
                   
                )
            ))}

            <h3>Add a Reply</h3>
            <form action={`/post/${post._id}/replies?token=${token}`} method="POST">
            <textarea name="text" placeholder="Write your reply..." required />
            <br/>
            <input type="text" name="image" placeholder="Image URL" />
            <br/>
            <button type="submit">Reply</button>
            </form>
            </div>
        </div>
    )
}

module.exports = Show