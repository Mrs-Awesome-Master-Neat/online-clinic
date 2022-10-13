import '../style/navbar.css'

export default function NavBar() {
    return (
        <div className='navbar'>
            <div>
                <img src="/icons/home.png" alt="" />
                <p className='nav-text'>Home</p>
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
                <img src="/icons/prof-edit.png" alt="" />
                <p className='nav-text'>profile</p>
            </div>
        </div>
    )
}