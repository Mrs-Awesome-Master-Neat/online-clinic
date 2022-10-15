import React from "react";
import { useHistory } from "react-router-dom";

import "../style/profile.css"



function Profile({user}) {
    console.log(user)

    const history = useHistory();
    
    function navigateUpdate() {
        history.push("/editprofile");
    }
   
    return (
        
            
        <div className="profile-container">
            <img className="image" width="100" height="100" src="/images/prof-pic.png" alt="avatar" />
            <div className="username-details">
                <h1 className="nameheader">{user.first_name} {user.last_name}</h1>
                <h3 className="usernameheader">@{user.user_name}</h3>
                <div className="user-details">
                    <p><b>Full Name: {user.first_name} {user.last_name}</b> {user.type}</p>
                    <p><b>Email Address : </b>{user.email}</p>
                    <p><b>Date of birth :</b>{user.date_of_birth}</p>
                    <p><b>Gender :</b> {user.gender} </p>
                </div>

                <button className="update-profile" onClick={navigateUpdate}>EDIT PROFILE</button>
            </div>
           
        </div>
    
    )
}

export default Profile;