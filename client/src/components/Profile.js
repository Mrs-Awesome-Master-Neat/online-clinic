import React from "react";
import "../style/profile.css";



function Profile() {

    

    return (
        
            
        <div className="profile-container">
            <img className="image" width="100" height="100" src="/images/prof-pic.png" alt="avatar" />
            <div className="username-details">
                <h1 className="nameheader">Oscar Otee</h1>
                <h3 className="usernameheader">@oscar_otee</h3>
                <div className="user-details">
                    <p><b>Profession :</b> Cancer Specialist</p>
                    <p><b>Email Address : </b>oscarotee@gmail.com</p>
                    <p><b>Place of work : </b> Johns Hopkins Hospital</p>
                    <p><b>Started Work : </b> 19/01/2001 </p>
                    <p><b>Date of birth :</b> 3/04/1975 </p>
                    <p><b>Gender :</b> Male </p>
                </div>
            </div>
        </div>
    
    );
}

export default Profile;