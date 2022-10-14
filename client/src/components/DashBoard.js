import NavBar from "./NavBar";
import Post from "./Post";
import "../style/dashboard.css"
import { useState } from "react";
import TopBar from "./TopBar";
import Discover from "./Discover";
import { Route } from "react-router-dom";
import Profile from "./Profile";

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
                <Route exact path="/dashboard"><div className="posts">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                </Route>
                <Route exact path="/dashboard/profile" component={Profile}></Route>
              
                {isDesktop ? <Discover/>: <NavBar />}
            </div>
        </div>
    )
}