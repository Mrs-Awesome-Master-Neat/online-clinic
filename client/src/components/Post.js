import { useEffect, useState } from "react"
import "../style/post.css"
import { howLongAgo } from "./howLongAgo"
import Comment from "./Comment"

export default function Post({ post, likedPosts, setLikedPosts }) {
    const [currentPost, setCurrentPost] = useState(post)
    const [liked, setLiked] = useState(false)
    const [reply, setReply] = useState("")
    const [showNewReply, setShowNewReply] = useState(false)


    useEffect((() => {
        setLiked(liked => liked = likedPosts.find(p => p.id === currentPost.id) ? true : false)
    }), [likedPosts, currentPost])

    function handleLikeClick() {
        if (liked) {
            getThatPost(false)
        } else {
            getThatPost(true)
        }

    }
    function handleNewReply(e) {
        e.preventDefault()
        if(reply==="") return
        fetch('/comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                post_id: currentPost.id,
                text: reply
            })
        }).then(r => {
            if (r.ok) {
                r.json().then(setCurrentPost)
                setReply("")
            }
            else {
                r.json().then(console.log)
            }

        })
    }
    function getThatPost(is_liked) {
        fetch(`/likes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ post_id: post.id })
        }).then(r => r.json())
            .then(p => {
                console.log(p)
                setCurrentPost(p)
                if (is_liked) {
                    setLikedPosts(likedPosts => ([...likedPosts, p]))
                } else {
                    setLikedPosts(likedPosts => likedPosts.filter(post => post.id !== p.id))
                }
            })
    }
    function updatedPost(){
        fetch(`/posts/${currentPost.id}`)
        .then(r=>{
            if(r.ok){
                r.json().then(setCurrentPost)
            }
        })
    }
    function handleRepliesClick(){
        setShowNewReply(show=>!show)
        updatedPost()
    }

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
                            <p>{howLongAgo(currentPost.created_at)}</p>
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
                    <img onClick={handleRepliesClick} src="/icons/comment.png" alt="" className="post-icons" />
                    <p className="post-counts">{currentPost.all_comments}</p>
                </div>
                <div>
                    <img onClick={handleLikeClick} src={`/icons/like${liked ? "2" : ""}.svg`} id="post-like" alt="" className="post-icons" />
                    <p className="post-counts">{currentPost.all_likes}</p>
                </div>
            </div>
            {showNewReply && currentPost.comments? <div className="new-reply">
                <div className="replying">
                    <p>Replying to @{post.author}</p>
                    <button onClick={() => setShowNewReply(false)}><img src="/icons/cancel.svg" /></button>
                </div>
                <form onSubmit={handleNewReply}>
                    <div className="inputs">
                        <label><img src="/images/prof-pic.png" /></label>
                        <textarea onChange={e => setReply(e.target.value)} value={reply} placeholder="Write your reply..." />
                    </div>
                    <div className="form-submit">
                        <button><img src="/icons/send.svg" /></button>
                    </div>
                </form>
                <div className="comments">
                    <div id="lines"></div>
                    {currentPost.comments ? <p id="replies">Replies</p> : null}
                    {currentPost.comments.reverse().map((comment, index) => {
                        return <Comment comment={comment} key={index}/>
                    })}
                </div>
            </div> : null}
        </div>
    );
}