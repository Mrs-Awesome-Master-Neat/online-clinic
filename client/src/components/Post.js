import "../style/post.css"
export default function Post() {
    return (
        <div className="post">
            <div className="main-details">
                <div className="prof-image">
                    <img src="/images/prof-pic.png" alt="profile" />
                </div>
                <div className="details">
                    <div className="post-top">
                        <div className="post-names">
                            <p>@oscar_otee</p>
                            <p className="post-dot">.</p>
                            <p>Cancer</p>
                            <p className="post-dot">.</p>
                            <p>2h</p>
                        </div>
                        <p className="more">...</p>
                    </div>
                    <div className="content">
                        <p>This disease can be treated if diagnosed early. If you make it a point of earlier diagnosis, be sure that it can be treated if you are diagnosed of it.</p>
                    </div>
                </div>
            </div>
            <div className="post-bottom">
                <div>
                    <img src="/icons/comment.png" alt="" className="post-icons" />
                    <p className="post-counts">20</p>
                </div>
                <div>
                    <img src="/icons/like.svg" id="post-like" alt="" className="post-icons" />
                    <p className="post-counts">130</p>
                </div>
            </div>
        </div>
    )
}