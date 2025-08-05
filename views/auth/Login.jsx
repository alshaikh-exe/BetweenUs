const React = require("react");
const Layout = require("../Layouts/Layout")

function SignIn (props) {
    return(
        <Layout>
        <div class="">
            <a href="/users/signup">Create Account</a>
            <h1>Login</h1>
            <form action="/users/login" method="POST">
                Email: <input type="email" name="email" /><br/>
                Password: <input type="password" name="password" /><br/>
                <input type="submit" value="Log In" />
            </form>
        </div>
        </Layout>
    )
}

module.exports = SignIn;