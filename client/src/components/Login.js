import React from "react"
import "../style/login.css"
import image1 from "../images/hearth.png"


export default function Login() {
    return (
        <div className="login">

            <img className="image" src={image1} alt="loginpic" />
            <div>
                <h1><b>WELCOME BACK!</b></h1>
                <h1><b>Log In</b></h1>
            </div>
            <div className="form">

                <form className="login-form">
                    <label><b>Email</b></label>
                    <input id="email" type="text" />

                    <label><b>Password</b></label>
                    <input id="password" type="text" />

                    <button className="loginbutton"><b>LOG IN</b></button>
                </form>

            </div>

        </div>
    )
}