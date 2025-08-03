const React = require("react");

/*
const postSchema = mongoose.Schema({
    type: { type: String, required: true },
    image: { type: String },
    title: { type: String, required: true },
    text: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    votes: { type: Number, required: true, default: 0},
},
*/

function Index (props) {
    const token = props.token;
    const posts = props.posts;
    return (
        <div>
            <a href={`/users/profile?token=${token}`}>My Profile</a>
            <br/>
            <a href={`/feed/new?token=${token}`}>Create New Post</a>
            <h1>Index Page</h1>
            <a href={`/asks?token=${token}`}>Asks</a>
            <br />
            <a href={`/feels?token=${token}`}>Feels</a>
             <ul>
                {
                    posts.map( (post) => {
                        return (
                        <li>{`${post.type}: ${post.title}`} 
                        <br/>
                            <a href={`/feed/${post._id}?token=${token}`}>{post.text}</a> 
                             <br/>
                           Posted by: {post.author.color}
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