const React = require("react");
const Layout = require("../Layouts/Layout");

function Edit (props) {
    const reply = props.reply;
    const token = props.token;
    const user = props.user;
    return (
       <Layout>
        <div className="edit-reply-container">
            <h1 className="edit-reply-title">Edit Reply</h1>
                        <a href={`/?token=${token}`} className="back-link">Go back to Home Page</a>

            <form 
              action={`/post/${reply.post._id}/replies/${reply._id}?_method=PUT&token=${token}`} 
              method="POST"
              className="edit-reply-form"
            >
                <div className="form-section">
                    <label>Reply Text</label>
                    <input 
                        type="text" 
                        name="text" 
                        defaultValue={reply.text} 
                        required 
                    />
                </div>

                <button type="submit" className="btn update-btn" style={{ backgroundColor: user.color }}>Update Reply</button>
            </form>

            <form 
              action={`/post/${reply.post._id}/replies/${reply._id}?_method=DELETE&token=${token}`} 
              method="POST"
              className="delete-reply-form"
            >
                <button type="submit" className="btn delete-btn" style={{ backgroundColor: user.color }}>Delete Reply</button>
            </form>
        </div>
        </Layout>
    )
}

module.exports = Edit;