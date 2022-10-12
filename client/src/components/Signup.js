import "../style/signup.css"

function Signup(){
    return(
        <div>
            <div>
                <p>Sign UP</p>
                <form>
                    <label>First Name</label>
                    <input id="fname" type="text"></input>

                    <label>Last Name</label>
                    <input id="lname" type="text"></input>

                    <label>Email</label>
                    <input id = "email" type="text"></input>

                    <label>Password</label>
                    <input id ="password" type="text"></input>

                    <label>Confirm Password</label>
                    <input id="confirmpass" type="text"></input>

                    <button>Sign Up</button>
                </form>
            </div>
        </div>
        
    )
}

export default Signup;