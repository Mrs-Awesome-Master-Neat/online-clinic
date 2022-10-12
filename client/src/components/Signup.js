import React from "react";

import "../style/signup.css";
import video1 from "../images/Heart.mp4";
import VideoPlayer from "react-background-video-player"

function Signup() {
    return (
        <div>
            <VideoPlayer src={video1} autoPlay={true} muted={true} loop={true} />
            <div className="header"><h1><b>Sign Up</b></h1></div>
           
        
                <div className="form">

                    <form className="signup-form">
                        <label>First Name</label>
                        <input id="fname" type="text"></input>

                        <label>Last Name</label>
                        <input id="lname" type="text"></input>

                        <label>Email</label>
                        <input id="email" type="text"></input>

                        <label>Password</label>
                        <input id="password" type="text"></input>

                        <label>Confirm Password</label>
                        <input id="confirmpass" type="text"></input>

                        <button className="signupbutton"><b>SIGN UP</b></button>
                    </form>
                </div>
               
            </div>
        

    )
}

export default Signup;