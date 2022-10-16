import { howLongAgo } from "./howLongAgo"

export default function Comment({ comment }) {
    return (
        <div className="comment">
            <div>
                <div className="comment-top">
                <img className="prof-image-comment" src="/images/prof-pic.png" alt="profile" />
                    <div>
                        <p>@{comment.author}</p>
                        <p>.</p>
                        <p>{howLongAgo(comment.created_at)}</p>
                    </div>
                </div>
                <p className="more-com">...</p>
            </div>
            <p className="comment-text">{comment.text}</p>
        </div>
    )
}