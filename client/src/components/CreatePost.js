import { useState } from "react"

export default function CreatePost(){
    const[content,setContent]=useState("")
    const[create,setCreate]=useState(false)
    return(
        <div>
            {<button onClick={()=>setCreate(c=>!c)}>{create?"Cancel":"Create a post" }<img/></button>}
            {create?
            <form>
                <textarea onChange={(e)=>setContent(e.target.value)} value={content} placeholder=""/>
                <button>submit post <img/></button>
            </form>
            :
            null}
        </div>
    )
}