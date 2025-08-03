const React = require("react");

function Asks (props) {
    const token = props.token;
    return (
        <div>
              <a href={`/?token=${token}`}>Back to home page</a>
            <h1>Asks Page</h1>
        </div>
    )
};

module.exports = Asks;