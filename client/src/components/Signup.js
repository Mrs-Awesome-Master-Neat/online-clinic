import React, { useState } from "react";

import "../style/signup.css";
import video1 from "../images/Heart.mp4";
import Video from "react-background-video-player";

function Signup({onLogin}) {
    const[errors,setErrors]=useState(null)
    const[signupDetails,setSignupDetails]=useState(
        {
            full_name:"",
            user_name:"",
            email:"",
            password:"",
            confirm_password:""
        }
    )
    function handleChange(e){
        setSignupDetails(details=>({...details,[e.target.name]:e.target.value}))
    }

    function handleSignup(e){
        e.preventDefault()
        console.log(signupDetails)
        fetch("/users",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({...signupDetails,
                first_name:signupDetails.full_name.split(" ")[0],
                last_name:signupDetails.full_name.split(" ")[1] || "" 
            })
        }).then(res=>{
            if(res.ok){
                res.json().then(onLogin)
            }
            else{
                res.json().then(console.log)
            }
        })
    }
    return (
        <div className="body">
            
            <Video className="video" src={video1} autoPlay={true} muted={true} loop={true}/>
            <div className="header">
                <h1><b>Sign Up</b></h1>
            </div>
            <div className="form" onSubmit={handleSignup}>
                
                <form className="signup-form">
                    <label><b>Full Name</b></label>
                    <input onChange={handleChange} 
                    name="full_name" value={signupDetails.first_name}
                    id="fname" type="text" placeholder="Full name..."></input>

                    <label><b>User Name</b></label>
                    <input onChange={handleChange}
                    name="user_name" value={signupDetails.user_name}
                    id="lname" type="text" placeholder="User name..."></input>

                    <label><b>Email</b></label>
                    <input onChange={handleChange}
                    name="email" value={signupDetails.email}
                    id="email" type="text" placeholder="Email address..."></input>

                    <label><b>Password</b></label>
                    <input onChange={handleChange} 
                    name="password" value={signupDetails.password}
                    id="password" type="text" placeholder="Password..."></input>

                    <label><b>Confirm Password</b></label>
                    <input onChange={handleChange}
                    name="confirm_password" value={signupDetails.confirm_password}
                    id="confirmpass" type="text" placeholder="Confirm password..."></input>

                    <button className="signupbutton"><b>SIGN UP</b></button>
                </form>
            </div>
        </div>


    );
}

export default Signup;