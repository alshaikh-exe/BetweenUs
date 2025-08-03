const React = require('react')

function Edit (props) {
    const token = props.token;
    const { type, title, text, image, _id} = props.post
    return (
        <div>
            <h1>Edit Post Page</h1>
            <a href={`/?token=${token}`}>Go back to Index Page</a>
            <form action={`/post/${_id}?token=${token}&_method=PUT`} method="POST">
                Type: <select name="type" id="postType" defaultValue={type}>
                    <option value="ask">Ask</option>
                    <option value="feel">Feel</option>
                    </select>
                <br/>
                Title: <input type="text" name="title" defaultValue={title}/>
                <br/>
                Image: <input type="text" name="image" defaultValue={image}/>
                <br/>
                Text:  <input type="text" name="text" defaultValue={text}/>
                <input type="submit" value="Update Post" />
            </form>
        </div>
    )
}

module.exports = Edit