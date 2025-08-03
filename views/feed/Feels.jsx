const React = require("react");

const colorName = {
    "#ff595e": "Red",
    "#ffca3a": "Yellow",
    "#8ac926": "Green",
    "#1982c4": "Blue",
    "#6a4c93": "Purple",
    "#292f36": "Black",
}

function Feels (props) {
    const token = props.token;
    const posts = props.posts
    return (
        <div>
              <a href={`/?token=${token}`}>Back to home page</a>
            <h1>Feels Page</h1>
            {
                    posts.map( (post) => {
                        return (
                        <li>{`${post.type}: ${post.title}`} 
                        <br/>
                            <a href={`/post/${post._id}?token=${token}`}>{post.text}</a> 
                             <br/>
                             Posted by: {colorName[post.author.color]}
                            <br/>
                           Votes: {post.votes}
                        </li>)
                    })
                }
        </div>
    )
};

module.exports = Feels;