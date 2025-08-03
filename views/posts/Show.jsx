const React = require("react");

function Show (props) {
    const token = props.token;
    const post = props.post;

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
            </div>
        </div>
    )
}

module.exports = Show