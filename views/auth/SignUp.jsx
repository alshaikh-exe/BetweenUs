const React = require("react");

function SignUp (props) {
    return(
        <div>
            <h1>Sign Up</h1>
            <form action="/users/signup" method="POST">
                Full Name: <input type="text" name="name" />
                <br/>
                Email: <input type="email" name="email" />
                <br/>
                Password: <input type="text" name="password" />
                <br/>
                Color: <select name="color" id="user-color">
                    <option value="">Select your color!</option>
                    <option value="#ff595e">Red</option>
                    <option value="#ffca3a">Yellow</option>
                    <option value="#8ac926">Green</option>
                    <option value="#1982c4">Blue</option>
                    <option value="#6a4c93">Purple</option>
                    <option value="#292f36">Black</option>
                </select>
                <input type="submit" value="Create User" />
            </form>
        </div>
    )
}

module.exports = SignUp;