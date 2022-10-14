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
    const [myGroups, setMyGroups] = useState([])
    const [activeGroup, setActiveGroup] = useState(null)
    const [allGroups, setAllGroups] = useState([])

    const [allPosts,setAllPosts]=useState([])

    useEffect((()=>{
        fetch("/posts")
        .then(r=>r.json())
        .then(setAllPosts)
    }),[])

console.log(allPosts)
    useEffect((() => {
        fetch("/diseases")
            .then(r => r.json())
            .then(setAllGroups)
    }), [])

    useEffect((() => {
        getGroup(user.diseases[0].id)
    }), [])

    function getGroup(id){
        fetch(`/diseases/${id}`)
        .then(r=>r.json())
        .then(setActiveGroup)
    }

    window.addEventListener("resize", () => {
        SetIsDesktop(isDesktop => document.documentElement.clientWidth > 600 ? true : false)
    }, true)


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
    const unsubscribed = allGroups.filter(g => !(user.diseases.map(gr => gr.id).includes(g.id)))
    console.log(activeGroup)
    return (
        <div className="dash-container">
            <TopBar user={user} />
            <div className="dashboard">
                {isDesktop ? <NavBar /> : null}
                <Route exact path="/dashboard"><div className="posts">
                    {allPosts.map((post,index)=>{
                       return <Post key={index} post={post}/>
                    })}
                </div>
                    {isDesktop ? <Discover onSubscribe={onSubscribe} groups={allGroups} /> : <NavBar />}
                </Route>
                <Route exact path="/dashboard/profile">
                    
                    {user ? <Profile user={user}/>:null }
                </Route>
                <Route exact path={"/dashboard/connect"}>
                   {activeGroup? <div style={{ display: "flex" }}>
                        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <GroupDetails group={allGroups[0]}/>
                            <h3>Popular Posts</h3>
                            {activeGroup.posts.map((post,index)=> {
                                return <Post post={post} key={index} />
                            })}
                        </div>
                     
                        {<MyGroups getGroup={getGroup} groups={user.diseases} />}
                    </div>:null}
                    {/* {activeGroup? <div> */}
                    {/* <GroupDetails activeGroup={activeGroup}/> */}
                    {/* <CreatePost /> */}
                    {/* <Post /> */}
                    {/* <Post /> */}
                    {/* </div>:null} */}
                </Route>


            </div>
        </div>
    )
}