import { useState } from 'react'
import '../style/navbar.css'

export default function NavBar() {
    const[active,setActive]=useState("Home")

    function handleNavClick(e){
        setActive(e.target.textContent)
    }
    return (
        <div className='navbar'>
            
            
            <div className={active==="Home"?"active":""} onClick={handleNavClick}>
                <NavLink activeClassName='is-active' to="/dashboard" ><img src="/icons/home.png" alt="" /></NavLink>
                <p className='nav-text'>
                    <NavLink className="homelink" activeClassName='is-active' to="/dashboard">
                    Home </NavLink></p>
            </div>
            <div className={active==="Health Learn"?"active":""} onClick={handleNavClick}>
                <img src="/icons/medi.png" alt="" />
                <p className='nav-text'>Health Learn</p>
            </div>
            <div className={active==="Connect"?"active":""} onClick={handleNavClick}>
                <img src="/icons/connect.svg" alt="" />
                <p className='nav-text'>Connect</p>
            </div>
            <div className={active==="My Posts"?"active":""} onClick={handleNavClick}>

                <img src="/icons/like.svg" alt="" />
                <p className='nav-text'>My Posts</p>
            </div>
            <div>
            <NavLink activeClassName='is-active' to="/dashboard/profile"><img src="/icons/prof-edit.png" alt="" /></NavLink>
            <NavLink className="profilelink" activeClassName='is-active' to="/dashboard/profile">
            <p className='nav-text'>Profile </p></NavLink> 
            </div>
        </div>
    );
}