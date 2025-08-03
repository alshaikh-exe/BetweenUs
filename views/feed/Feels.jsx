const React = require("react");

function Feels (props) {
    const token = props.token;
    return (
        <div>
              <a href={`/?token=${token}`}>Back to home page</a>
            <h1>Feels Page</h1>
        </div>
    )
};

module.exports = Feels;