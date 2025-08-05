const React = require('react')
const Layout = require("../Layouts/Layout")

function New (props) {
    const token = props.token;
    const user = props.user;
       return (
        <Layout>
        <div class="new-container">
            <h1 class="new-title">Create a New Post</h1>
            <a href={`/?token=${token}`} class="back-link">Back to Home Page</a>

            <form action={`/?token=${token}`} method="POST" class="new-form">
                
                <div class="form-section">
                    <label>Type:</label>
                    <select name="type" id="postType" required>
                        <option value="">Select post type</option>
                        <option value="ask">Ask</option>
                        <option value="feel">Feel</option>
                    </select>
                </div>

                <div class="form-section">
                    <label>Title:</label>
                    <input type="text" name="title" required />
                </div>


                <div class="form-section">
                    <label>Text:</label>
                    <textarea name="text" placeholder="Write your post..." required></textarea>
                </div>

                <input type="submit" value="Post" class="btn post-btn" style={{ backgroundColor: user.color}}/>
            </form>
        </div>
        </Layout>
    )
}

module.exports = New