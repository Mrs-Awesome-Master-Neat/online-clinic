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
                    <input id="fname" type="text"></input>

                    <label><b>Last Name</b></label>
                    <input id="lname" type="text"></input>

                    <label><b>Email</b></label>
                    <input id="email" type="text"></input>

                    <label><b>Password</b></label>
                    <input id="password" type="text"></input>

                    <label><b>Confirm Password</b></label>
                    <input id="confirmpass" type="text"></input>

                    <button className="signupbutton"><b>SIGN UP</b></button>
                </form>
            </div>
        </div>


    )
}

export default Signup;