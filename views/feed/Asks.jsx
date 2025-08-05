const React = require("react");

function Asks (props) {
    const token = props.token;
    const posts = props.posts;
    return (
        <div>
              <a href={`/?token=${token}`}>Back to home page</a>
            <h1>Asks Page</h1>
            {
                    posts.map( (post) => {
                        return (
                        <li>{`${post.type}: ${post.title}`} 
                        <br/>
                            <a href={`/post/${post._id}?token=${token}`}>{post.text}</a> 
                             <br/>
                             Posted by: {post.author.shortId}
                        </li>)
                    })
                }
        </div>
    )
};

module.exports = Asks;