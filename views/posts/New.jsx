const React = require('react')
const Layout = require("")

function New (props) {
    const token = props.token
    return (
        <div>
            <a href={`/?token=${token}`}>Back to Home Page</a>
            <h1>New Post Page</h1>
            <form action={`/?token=${token}`} method="POST">
                Type: <select name="type" id="postType" required>
                    <option value="">Select post type</option>
                    <option value="ask">Ask</option>
                    <option value="feel">Feel</option>
                    </select>
                    <br/>
                Title: <input type="text" name="title" required/>
                <br/>
                Image: <input type="text" name="image" placeholder="Image URL"/> 
                <br/>
                Text: <input type="text" name="text" required/>
                <input type="submit" value="Post" />
            </form>
        </div>
    )
}

module.exports = New