import React from "react";

import "../style/signup.css";
import video1 from "../images/Heart.mp4";
import Video from "react-background-video-player"

function Signup() {
    return (
        <div className="body">
            
            <Video className="video" src={video1} autoPlay={true} muted={true} loop={true}/>
            <div className="header">
                <h1><b>Sign Up</b></h1>
            </div>
            <div className="form">
                
                <form className="signup-form">
                    <label><b>First Name</b></label>
                    <input id="fname" type="text" placeholder="Enter your first name..."></input>

                    <label><b>Last Name</b></label>
                    <input id="lname" type="text" placeholder="Enter your last name..."></input>

                    <label><b>Email</b></label>
                    <input id="email" type="text" placeholder="Enter your email address..."></input>

                    <label><b>Password</b></label>
                    <input id="password" type="text" placeholder="Enter your password..."></input>

                    <label><b>Confirm Password</b></label>
                    <input id="confirmpass" type="text" placeholder="Confirm password..."></input>

                    <button className="signupbutton"><b>SIGN UP</b></button>
                </form>
            </div>
        </div>


    )
}

export default Signup;