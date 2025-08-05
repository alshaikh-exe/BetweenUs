const React = require("react");
const Layout = require("../Layouts/Layout");

function Index (props) {
    const token = props.token;
    const posts = props.posts;
    return (
        <Layout>
        <div>
            <div class="header">
                <div class="header-left">
            <a href={`/users/profile?token=${token}`}>My Profile</a>
            <br/>
            <a href={`/post/new?token=${token}`}>Create New Post</a>
            </div>

            <div class="header-center">
            <h1>BetweenUs</h1>
            <div class="nav-buttons">
            <a href={`/asks?token=${token}`}>Asks</a>
            <a href={`/feels?token=${token}`}>Feels</a>
            </div>
            </div>

            <div class="header-right">
            <a href="/users/login">Sign In</a>
            </div>
            </div>
             <ul>
                {
                    posts.map( (post) => {
                        return (
                        <li>{`${post.type}: ${post.title}`} 
                        <br/>
                            <a href={`/post/${post._id}?token=${token}`}>{post.text}</a> 
                             <br/>
                             Posted by: {post.author.shortId || "Unknown" }
                        </li>)
                    })
                }
            </ul>
        </div>
        </Layout>
    )
};

module.exports = Index;