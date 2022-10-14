import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function EditProfile({onUpdate}){

    const history = useHistory();
    
    function navigateProfile() {
        history.push("/dashboard/profile");
    }

    const [errors,setErrors]=useState(null)
    const [updateDetails,setUpdateDetails]=useState({
        profession: "",
        place_of_work:"",
        started_work:"",
        email:"",
        date_of_birth:"",
        gender:""
    })
    function handleChange(e){
        setUpdateDetails(details=>({...details,[e.target.name]:e.target.value}))
    }
    function handleUpdate(id){
        //e.preventDefault()
        console.log(updateDetails)
        fetch(`/normal_users/${id}`,{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateDetails)
        }).then(res=>{
           if(res.ok){
            res.json().then(onUpdate)
           }else{
            res.json(errors).then(setErrors)
           }
        })
    }

    return(
        <div className="editform-container">
            <div className="edit-form">
                    <form className="eform" onSubmit={handleUpdate}>
                            <label><b>Profession :</b></label>
                            <input type="text" onChange={handleChange} name="profession" value={updateDetails.profession}></input>

                            <label><b>Place of work :</b></label>
                            <input type="text" onChange={handleChange} name="place_of_work" value={updateDetails.place_of_work} ></input>
                            
                            <label><b>Started Work :</b></label>
                            <input type="date" onChange={handleChange} name="started_work" value={updateDetails.started_work}></input>
                            
                            <label><b>Email Address :</b></label>
                            <input type="email" onChange={handleChange} name="email" value={updateDetails.email}></input>

                            <label><b>Date of Birth:</b></label>
                            <input type="date" onChange={handleChange} name="date_of_work" value={updateDetails.date_of_birth}></input>

                            <label><b>Gender :</b></label>
                            <input type="text" onChange={handleChange} name="gender" value={updateDetails.gender}></input>


                    </form>

                    <button>UPDATE</button>
                    <button onClick={navigateProfile}>VIEW PROFILE</button>
            </div>

        </div>
    )

}

export default EditProfile;