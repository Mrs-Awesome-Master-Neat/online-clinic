import { useEffect, useState } from "react"
import "../style/post.css"
export default function Post({post}) {
    const[liked,setLiked]=useState(false)
    const [currentPost,setCurrentPost]=useState(post)
    function handleLikeClick(){
        setLiked(like => !like)
    }
    useEffect((()=>{
        if (liked){
            fetch("/likes",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    post_id:currentPost.id
                })
            }).then(r=>r.json()).then(p=>{
                console.log("p",p)
            })
        }
    }),[])
    let time=currentPost.created_at.split(/[-T:.Z]/)
    time[1]=parseInt(time[1])-1
    time[3]=parseInt(time[3])+3
    time.pop()
    time=time.map(t=>parseInt(t))
    let date=new Date()
    let time_diff= new Date(time[0],time[1],time[2],time[3],time[4],time[5])
    const t=Math.floor((date-time_diff)/(60*1000))

    function howLog(t){
        if(t<1){
            return " <1m"
        }else if(t<60){
            return `${t} m`
        }else if(t>60 && t<(24*60))
        {
            return `${Math.round(t/60)} hr`
        }else{
            return `${Math.round(t/(60))}`
        }

    }
    const times=howLog(t)

    return (
        <div className="post">
            <div className="main-details">
                <div className="prof-image">
                    <img src="/images/prof-pic.png" alt="profile" />
                </div>
                <div className="details">
                    <div className="post-top">
                        <div className="post-names">
                            <p>@{currentPost.author}</p>
                            <p className="post-dot">.</p>
                            <p>{currentPost.group}</p>
                            <p className="post-dot">.</p>
                            <p>{times}</p>
                        </div>
                        <p className="more">...</p>
                    </div>
                    <div className="content">
                        <p>{currentPost.content}</p>
                    </div>
                </div>
            </div>
            <div className="post-bottom">
                <div>
                    <img src="/icons/comment.png" alt="" className="post-icons" />
                    <p className="post-counts">{currentPost.all_comments}</p>
                </div>
                <div>
                    <img onClick={handleLikeClick} src={`/icons/like${liked?"2":""}.svg`} id="post-like" alt="" className="post-icons" />
                    <p className="post-counts">{currentPost.all_likes}</p>
                </div>
            </div>
        </div>
    )
}