const React = require("react");
const Layout = require("../Layouts/Layout");

function Index (props) {
    const token = props.token;
    const posts = props.posts;
    const user = props.user;
    return (
        <Layout>
        <div>
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
            <h1>BetweenUs</h1>
            <div class="nav-buttons">
            <a href={`/asks?token=${token}`} class="nav-ask">Asks</a>
            <a href={`/feels?token=${token}`} class="nav-feel">Feels</a>
            </div>
            </div>

            <div class="header-right">
            <a href="/users/login">Log Out</a>
            </div>
            </div>
            <div>
             <ul class="post-container">
                {
                    posts.map( (post) => {
                        return (
                        <li class="post">
                            <a href={`/post/${post._id}?token=${token}`} class="post-link-wrapper">
                             <div class={`post-type ${post.type}`}>
                                {post.type === "ask" ? "Ask" : "Feel"}
                            </div>
                            <div class="post-inner">
                            <div class="post-header">
                            <div class="user-profile-post"
                                style={{ backgroundColor: post.author.color}}
                            >
                            </div>
                            
                             <span class="poster-name">{post.author.shortId || "Unknown" }</span>

                             </div>

                             <h3 class="post-title">{post.title}</h3>

                             <p class="post-content">
                             {post.text}
                             </p>
                             </div>
                             </a>
                        </li>)
                    })
                }
            </ul>
            </div>
        </div>
        </Layout>
    )
};

module.exports = Index;