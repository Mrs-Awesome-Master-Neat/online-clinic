import NavBar from "./NavBar";
import Post from "./Post";
import "../style/dashboard.css"
import { useState } from "react";
import TopBar from "./TopBar";
import Discover from "./Discover";

export default function Dashboard() {
    const [isDesktop, SetIsDesktop] = useState(document.documentElement.clientWidth > 600)

    window.addEventListener("resize", () => {
        SetIsDesktop(isDesktop => document.documentElement.clientWidth > 600 ? true : false)
    }, true)
    return (
        <div className="dash-container">
            <TopBar/>
            <div className="dashboard">
                {isDesktop ? <NavBar /> : null}
                <div className="posts">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
             
                {isDesktop ? <Discover/>: <NavBar />}
            </div>
        </div>
    )
}