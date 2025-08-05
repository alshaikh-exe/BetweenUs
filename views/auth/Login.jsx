const React = require("react");
const Layout = require("../Layouts/Layout")

function SignIn (props) {
    return(
        <Layout>
        <div class="signup-container">
            <h1>Login</h1>
            <form action="/users/login" method="POST">
            <div class="form-section">
                <label>Email:</label>
                    <input type="email" name="email" />
            </div>

            <div class="form-section">
                <label>Password:</label> 
                <input type="password" name="password" />
            </div>

            <div className="form-section">
                <label>Pick Your Color Again:</label>
                    <select name="color" id="user-color" required>
                        <option value="">Select your color!</option>
                        <option value="#ff595e">Red</option>
                        <option value="#ffca3a">Yellow</option>
                        <option value="#8ac926">Green</option>
                        <option value="#1982c4">Blue</option>
                        <option value="#6a4c93">Purple</option>
                        <option value="#292f36">Black</option>
                    </select>
            </div>

            <p class="signup-footer">
                Don't have an account? <a href="/users/signup">Create one</a>
            </p>
                <input type="submit" value="Log In" id="submit-btn" />
            </form>
        </div>
        </Layout>
    )
}

module.exports = SignIn;