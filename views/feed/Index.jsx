const React = require("react");

function Index (props) {
    const token = props.token;
    const posts = props.posts;
    return (
        <div>
            <a href={`/users/profile?token=${token}`}>My Profile</a>
            <br/>
            <a href={`/post/new?token=${token}`}>Create New Post</a>
            <br/>
            <a href="/users/login">Sign In</a>
            <h1>Home Page</h1>
            <a href={`/asks?token=${token}`}>Asks</a>
            <br />
            <a href={`/feels?token=${token}`}>Feels</a>
             <ul>
                {
                    posts.map( (post) => {
                        return (
                        <li>{`${post.type}: ${post.title}`} 
                        <br/>
                            <a href={`/post/${post._id}?token=${token}`}>{post.text}</a> 
                             <br/>
                             Posted by: {post.author.shortId || "Unknown" }
                            <br/>
                           Votes: {post.votes}
                        </li>)
                    })
                }
            </ul>
        </div>
    )
};

module.exports = Index;