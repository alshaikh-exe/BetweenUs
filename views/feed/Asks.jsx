const React = require("react");
const Layout = require("../Layouts/Layout");

function Asks (props) {
    const token = props.token;
    const posts = props.posts;
    const user = props.user;

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
                <a href={`/?token=${token}`} className="header-title-link ask-title">Asks</a>
            </h1>
            </div>

            <div class="header-right">
            <a href="/users/login">Log Out</a>
            </div>
            </div>
               <div class="asks-container">
                    <ul class="post-container">
                       {
                           posts.map( (post) => {
                               return (
                               <li class="post">
                                    <div class={`post-type ${post.type}`}>
                                       {post.type === "ask" ? "Ask" : "Feel"}
                                   </div>
                                   <div class="post-inner">
                                   <div class="post-header">
                                   <div class="user-profile-post"
                                       style={{ backgroundColor: post.author.color}}
                                   >
                                       {/* <img src="/avatar.png" alt="avatar" class="avatar-img" /> */}
                                   </div>
                                   
                                    <span class="poster-name">{post.author.shortId || "Unknown" }</span>
       
                                    </div>
       
                                    <h3 class="post-title">{post.title}</h3>
       
                                    <p class="post-content">
                                    <a href={`/post/${post._id}?token=${token}`}>{post.text}</a>
                                    </p>
                                    </div>
                               </li>)
                           })
                       }
                   </ul>
                   </div>
               </Layout>
    )
};

module.exports = Asks;