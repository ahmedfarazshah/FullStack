import { useState } from "react"


function Notebox(props){

    const [newnote, setNewNote] = useState({
        title: "",
        content: "",  
    })

    function newnotehandler(e){
        const {value, name} = e.target

        setNewNote((n)=> ({...n, [name]:value}))


    }

    return(
        <div className="notebox">
            <input type="text" value={newnote.title} name="title" onChange={newnotehandler} placeholder="Title" />
            <input type="text"value={newnote.content}name="content" onChange={newnotehandler} placeholder="Take a note..."/>
            <button onClick={()=>{
                props.addNote(newnote)
                
            }}>Add</button>
        </div>
    )
}

export default Notebox