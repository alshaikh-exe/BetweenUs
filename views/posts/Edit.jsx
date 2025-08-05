const React = require('react')
const Layout = require("../Layouts/Layout");

function Edit (props) {
    const token = props.token;
    const post = props.post
    const { type, title, text, image, _id} = props.post
    return (
        <Layout>
        <div class="edit-container">
            <h1 class="edit-title">Edit Post Page</h1>

            <form action={`/post/${_id}?token=${token}&_method=PUT`} method="POST" class="edit-form">
            <div class="form-section">
            <label>Type:</label>
                <select name="type" id="postType" defaultValue={type}>
                    <option value="ask">Ask</option>
                    <option value="feel">Feel</option>
                    </select>
                </div>

                <div class="form-section">
                <label>Title:</label> 
                <input type="text" name="title" defaultValue={title}/>
                </div>

                <div class="form-section">
                <label>Text:</label>  
                <input type="text" name="text" defaultValue={text}/>
                </div>

                <button type="submit" value="Update Post" class="btn update-btn" style={{ backgroundColor: post.author.color }}>Update Post</button>
            </form>
        </div>
        </Layout>
    )
}

module.exports = Edit