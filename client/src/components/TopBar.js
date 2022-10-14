import { useState } from "react"
import { useHistory } from "react-router-dom"
import "../style/top-bar.css"

export default function TopBar({ user }) {
    const [show, setsShowLogout] = useState(false)
    const history= useHistory()
        function handleLogout(){
        fetch("/logout",{
            method:"DELETE"
        }).then(r=>{
            if(r.ok){
                history.push("/")
            }
        })

    }
    return (
        <div className="top-bar">
            <div className="logo-div">
                <img src="/icons/logo.png" alt="icons" />
                <p className="top-title">Oclinic</p>
            </div>

            <form className="search-form">
                <input type={"text"} />
                <button><img src="/icons/search.svg" alt="btnicon" /></button>
            </form>
            <div className="bar-profile">
                <img onClick={() => setsShowLogout(show => !show)}  src="/images/prof-pic.png" alt="profile" />
                <div>
                    <p className="top-name">{user.first_name} {user.last_name}</p>
                    <p className="top-username">@{user.user_name}</p>
                </div>
                {show ?
                    <div className="top-logout">
                        <p>signed in as {user.user_name}</p>
                        <button className="logout-cancel" onClick={handleLogout}>Logout <img src="/icons/logout.svg" alt="logout" /></button>
                        <button className="logout-cancel" onClick={()=>setsShowLogout(false)}>Cancel <img src="/icons/cancel.svg"/></button>
                    </div>
                    : null}
            </div>
        </div>
    )
}