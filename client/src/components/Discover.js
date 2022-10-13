import "../style/discover.css"


export default function Discover() {
    const groups = [
        {
            groupName: "Improving Infant Immunity",
            groupMembers: 2565,
            groupProfile: "/images/child.png"
        },
        {
            groupName: "Improving Infant Immunity",
            groupMembers: 2565,
            groupProfile: "/images/child.png"
        },
        {
            groupName: "Improving Infant Immunity",
            groupMembers: 2565,
            groupProfile: "/images/child.png"
        },
        {
            groupName: "Improving Infant Immunity",
            groupMembers: 2565,
            groupProfile: "/images/child.png"
        }

    ]

    function Group({ index, groupName, groupProfile, groupMembers }) {
        return (
            <div className="group">
                <div className="group-details">
                    <p>{index}. </p>
                    <img src={groupProfile} alt={groupName} />
                    <div>
                        <p>{groupName}</p>
                        <p id="group-members">{groupMembers} members</p>
                    </div>
                </div>
                <div className="join-button">
                    <p>Join</p>
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
                {groups.map((group, index) => {
                    return (
                        <Group
                            index={index + 1}
                            groupProfile={group.groupProfile}
                            groupName={group.groupName}
                            groupMembers={group.groupMembers}
                            key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}