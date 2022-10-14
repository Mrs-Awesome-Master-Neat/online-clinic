import { useEffect, useState } from "react"
import "../style/discover.css"


export default function Discover({onSubscribe,groups}) {


    function Group({ index, groupName, groupMembers,group }) {
        return (
            <div className="group">
                <div className="group-details">
                    <p>{index}. </p>
                    <img src={"./images/child.png"} alt={groupName} />
                    <div>
                        <p>{groupName}</p>
                        <p id="group-members">{groupMembers} members</p>
                    </div>
                </div>
                <div  className="join-button">
                    <button onClick={()=>onSubscribe(group.id)}>Join</button>
                </div>
            </div>
        )
    }
    return (
        <div className="discover">
            <div className="discover-title">
                <p>Discover Amazing Groups</p>
            </div>
            <div className="groups">
                {groups.slice(0,5).map((group, index) => {
                    return (
                        <Group
                        group={group}
                            index={index + 1}
                            groupName={group.name}
                            groupMembers={group.subscribed_users}
                            key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}