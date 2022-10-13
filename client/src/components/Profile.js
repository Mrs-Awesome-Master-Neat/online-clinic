import React from "react";
import "../style/profile.css"
import image2 from "../images/profilepic.png"

function Profile() {
    return (
        <div className="profile">
            <img className="image" width="70" height="70" src={image2} alt="avatar" />
            <div className="username-details">
                <h1>Oscar Otee</h1>
                <h3>@oscar_otee</h3>
                <div className="user-details">
                    <h2>Details:</h2>
                    
                </div>
                <label><b>Profession :</b></label>
                
                <p class="title">Cancer Specialist</p>
                <label><b>Email Address : </b></label>

                <label><b>Place of work : </b></label>

                <p>Johns Hopkins Hospital</p>
                <label><b>Started Work : </b></label>
                <label><b>Date of birth :</b></label>
                <label><b>Gender :</b></label>


                


            </div>
        </div>
    )
}

export default Profile;