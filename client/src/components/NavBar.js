
import '../style/navbar.css';
//import Profile from './Profile'
import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <div className='navbar'>
            
            
            <div>
                <NavLink activeClassName='is-active' to="/dashboard" ><img src="/icons/home.png" alt="" /></NavLink>
                <p className='nav-text'>
                    <NavLink className="homelink" activeClassName='is-active' to="/dashboard">
                    Home </NavLink></p>
            </div>
            <div>
                <img src="/icons/medi.png" alt="" />
                <p className='nav-text'>Health Learn</p>
            </div>
            <div>
                <img src="/icons/connect.svg" alt="" />
                <p className='nav-text'>Connect</p>
            </div>
            <div>

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