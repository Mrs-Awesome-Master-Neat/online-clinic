import "../style/login.css"

export default function Login(){
    return (
        <div className="login">
            <div>
                <img src="" alt=""/>
            </div>
            <div>
                <p>Login</p>
                <form className="login-form">
                    <label>Email</label>
                    <input id="email" type="text"/>
                    <label>Password</label>
                    <input id="password" type="text" />

                    <button className="loginbutton">LOG IN</button>
                </form>

            </div>

        </div>
    )
}