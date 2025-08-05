const React = require("react");

function Layout (props) {
    return (
        <html>
        <head>
            <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
            {props.children}
        </body>
        </html>
    )
}

module.exports = Layout