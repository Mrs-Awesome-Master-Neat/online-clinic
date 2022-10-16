import NavBar from "./NavBar";
import Post from "./Post";
import "../style/dashboard.css"
import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Discover from "./Discover";
import { Route } from "react-router-dom";
import Profile from "./Profile";
import CreatePost from "./CreatePost";
import GroupDetails from "./GroupDetails";
import MyGroups from "./MyGroups";

export default function Dashboard({ user }) {
    const [isDesktop, SetIsDesktop] = useState(document.documentElement.clientWidth > 600)
    const [error, setError] = useState(null)
    const [myGroups, setMyGroups] = useState(user.diseases)
    const [activeGroup, setActiveGroup] = useState(null)
    const [groupsNotIn, setGroupsNotIn] = useState(user.groups_not_subscribed)
    const [likedPosts,setLikedPosts]=useState(user.liked_posts)

    window.addEventListener("resize", () => {
        SetIsDesktop(isDesktop => document.documentElement.clientWidth > 600 ? true : false)
    }, true)

    console.log(activeGroup);
    useEffect((()=>{
        fetch(`/diseases/${user.diseases[0].id}`).then(r=>{
            if(r.ok){
                r.json().then(setActiveGroup)
            }
        }
        )
    }),[])
    function getGroup(id){
        fetch(`/diseases/${id}`).then(console.log)
        .then(r=>{
            if(r.ok){
                console.log(r);
                r.json().then(setActiveGroup)
            }
        })
    }
    function onSubscribe(groupId) {
        fetch("/subscribes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ group_id: groupId })
        }).then(r => {
            if (r.ok) {
                r.json().then(group => {
                    console.log(group)
                    setMyGroups(myGroups => ({ ...myGroups, group }))
                    setActiveGroup(group)
                })
            } else {
                r.json().then(setError)
            }
        })
    }
        return (
        <div className="dash-container">
            <TopBar user={user} />
            <div className="dashboard">
                {isDesktop ? <NavBar /> : null}
                <Route exact path="/dashboard"><div className="posts">
                    {user.feeds.map((post,index)=>{
                       return <Post setLikedPosts={setLikedPosts} likedPosts={likedPosts} key={index} post={post}/>
                    })}
                </div>
                    {isDesktop ? <Discover onSubscribe={onSubscribe} groups={groupsNotIn} /> : <NavBar />}
                </Route>
                <Route exact path="/dashboard/profile">
                    
                    {user ? <Profile user={user}/>:null }
                </Route>
                <Route exact path={"/dashboard/connect"}>
                   {activeGroup? <div style={{ display: "flex" }}>
                        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                           {<GroupDetails group={activeGroup}/>}
                           <p>Posts</p>
                           {activeGroup.posts.map((post,index)=>{
                            return <Post post={post} likedPosts={likedPosts} setLikedPosts={setLikedPosts} />
                           })}
                        </div>
                     
                        {<MyGroups getGroup={getGroup} groups={user.diseases} />}
                    </div>:null}
                </Route>


            </div>
        </div>
    )
}