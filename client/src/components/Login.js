import React, { useState } from "react";
import "../style/login.css";
import image1 from "../images/adult.jpg"


export default function Login({onLogin}) {

    const [errors,setErrors]=useState(null)
    const [loginDetails,setLoginDetails]=useState({
        user_details: "",
        password:""
    })
    function handleLogin(e){
        e.preventDefault()
        console.log(loginDetails)
        fetch("/sessions",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginDetails)
        }).then(res=>{
           if(res.ok){
            res.json().then(onLogin)
           }else{
            res.json(errors).then(setErrors)
           }
        })
    }
    return (
        <div className="login">

            <img className="image" src={image1} alt="loginpic" />
            <div>
                <h1 className="welcome"><b> WELCOME BACK!</b></h1>
                <h2><b> Log In</b></h2>
            </div>
            <div className="formlog">

                <form className="login-form" onSubmit={handleLogin}>
                    <label><b>Email/username</b></label>
                    <input id="email" type="text" 
                    onChange={(e)=>setLoginDetails(details=>({...details,user_details:e.target.value}))} 
                    value={loginDetails.user_details} placeholder="Enter your email or username..."/>

                    <label><b>Password</b></label>
                    <input id="password" type="password" 
                    onChange={(e)=>setLoginDetails(details=>({...details,password:e.target.value}))} 
                    value={loginDetails.password} placeholder="Enter your password..." />

                    <button className="loginbutton"><b>LOG IN</b></button>
                </form>
                <p>Don't have an account yet?<b style={{textDecoration:"underline"}}>Sign Up</b></p>
            </div>

        </div>
    )
}