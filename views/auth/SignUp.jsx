const React = require("react");
const Layout = require("../Layouts/Layout")

function SignUp (props) {
    return(
        <Layout>
        <div class="signup-container">
            <h1>Sign Up</h1>
            <form action="/users/signup" method="POST">
            <div class="form-section">
               <label>Full Name:</label> 
                <input type="text" name="name" />
                </div>

                <div class="form-section">
                <label>Email:</label>  
                <input type="email" name="email" />
                </div>
                
                <div class="form-section">
                <label>Password:</label>  
                <input type="text" name="password" />
                </div>

                <div class="form-section">
                <label>Color:</label> 
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

                <input type="submit" value="Create User" id="submit-btn" />
            </form>

            <p className="signup-footer">
                Already have an account? <a href="/users/login">Log In</a>
            </p>


        </div>

        
        </Layout>

        
    )
}

module.exports = SignUp;