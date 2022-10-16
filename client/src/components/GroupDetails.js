export default function GroupDetails({ group}) {

    return (
        <div className="group-more">
            <div className="group-icons">
                <div id="cancel" className="group-if-join">
                    {<img  src="/icons/cancel.svg" alt="cancel" />}
                </div>
                <img id="group-profile" src="/images/child.png" alt="child" />
                <div id="joined"  className="group-if-join">
                    {<img src="/icons/checkmark.svg" alt="checkmark" />}
                </div>
            </div>
            <div className="g-d-name">
                <p >{group.name}</p>
                <div>
                    <p>{"20k"}<b style={{color:"#747474"}}> members</b> / {"2"} <b style={{color:"#747474"}}> posts</b> </p>                </div>
                <p style={{color:"#747474",marginTop:"10px"}} id="group-desc">{group.description}</p>
            </div>

        </div>
    )
}