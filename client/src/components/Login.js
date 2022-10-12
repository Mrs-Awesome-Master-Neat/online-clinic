import React from "react";
import "../style/login.css";
import image1 from "../images/adult.jpg"


export default function Login() {
    return (
        <div className="login">

            <img className="image" src={image1} alt="loginpic" />
            <div>
                <h1 className="welcome"><b> WELCOME BACK!</b></h1>
                <h2><b> Log In</b></h2>
            </div>
            <div className="formlog">

                <form className="login-form">
                    <label><b>Email</b></label>
                    <input id="email" type="text" placeholder="Enter your email address..."/>

                    <label><b>Password</b></label>
                    <input id="password" type="text" placeholder="Enter your password..." />

                    <button className="loginbutton"><b>LOG IN</b></button>
                </form>

            </div>

        </div>
    )
}