import { useState } from 'react'
import '../style/navbar.css'
import { NavLink, useHistory } from 'react-router-dom'

export default function NavBar() {
    const [active, setActive] = useState("Home")

    function handleNavClick(e) {
        setActive(e)
    }
    const history=useHistory()
    return (
        <div className='navbar'>


            <div className={active === "Home" ? "active" : ""} onClick={(e) => handleNavClick("Home")}>
                <NavLink activeClassName='is-active' to="/dashboard" ><img src="/icons/home.png" alt="" /></NavLink>
                <p className='nav-text'>
                    <NavLink className="homelink" activeClassName='is-active' to="/dashboard">
                        Home </NavLink></p>
            </div>
            <div className={active === "Health Learn" ? "active" : ""} onClick={()=>handleNavClick("Health Learn")}>
                <img src="/icons/medi.png" alt="" />
                <p className='nav-text'>Health Learn</p>
            </div>
            <div className={active === "Connect" ? "active" : ""} onClick={()=>{handleNavClick("Connect");history.push("/dashboard/connect")}}>
                <img src="/icons/connect.svg" alt="" />
                <p className='nav-text'>Connect</p>
            </div>
            <div className={active === "My Posts" ? "active" : ""} onClick={()=>handleNavClick("My Posts")}>

                <img src="/icons/like.svg" alt="" />
                <p className='nav-text'>My Posts</p>
            </div>
            <div className={active === "Profile" ? "active" : ""} onClick={()=>handleNavClick("Profile")}>
                <NavLink activeClassName='is-active' to="/dashboard/profile"><img src="/icons/prof-edit.png" alt="" /></NavLink>
                <NavLink className="profilelink" activeClassName='is-active' to="/dashboard/profile">
                    <p className='nav-text'>Profile </p></NavLink>
            </div>
        </div>
    );
}