const React = require("react");

function Edit (props) {
    const reply = props.reply;
    const token = props.token;
    return (
        <div>
                        <a href={`/?token=${token}`}>Go back to Home Page</a>
            <h1>Edit Reply</h1>

            <div>
                <form action={`/post/${reply.post._id}/replies/${reply._id}?_method=PUT&token=${token}`} method="POST">
                <input type="text" name="text" defaultValue={reply.text} />
                <input type="text" name="image" placeholder="Image URL" defaultValue={reply.image} />
                <button type="submit">Update Reply</button>
                </form>
            </div>

            <div>
                <form action={`/post/${reply.post._id}/replies/${reply._id}?_method=DELETE&token=${token}`} method="POST">
                <button type="submit">Delete</button>
                </form>
            </div>
        </div>
    )
}

module.exports = Edit;