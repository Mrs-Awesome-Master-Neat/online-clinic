import { useState } from "react"
import "../style/post.css"
export default function Post({post}) {
    const[liked,setLiked]=useState(false)

    function handleLikeClick(){
        setLiked(like => !like)
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
                            <p>@{post.author}</p>
                            <p className="post-dot">.</p>
                            <p>{post.group}</p>
                            <p className="post-dot">.</p>
                            <p>2h</p>
                        </div>
                        <p className="more">...</p>
                    </div>
                    <div className="content">
                        <p>{post.content}</p>
                    </div>
                </div>
            </div>
            <div className="post-bottom">
                <div>
                    <img src="/icons/comment.png" alt="" className="post-icons" />
                    <p className="post-counts">20</p>
                </div>
                <div>
                    <img onClick={handleLikeClick} src={`/icons/like${liked?"2":""}.svg`} id="post-like" alt="" className="post-icons" />
                    <p className="post-counts">130</p>
                </div>
            </div>
        </div>
    );
}