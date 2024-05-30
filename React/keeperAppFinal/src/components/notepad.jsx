import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';


function Notebox(props){

    const [newnote, setNewNote] = useState({title: "",content: ""})
    const [isExpand, setExpand] = useState(false)


    function newnotehandler(e){
        const {value, name} = e.target

        setNewNote((n)=> ({...n, [name]:value}))

    }
    function handleClick(){
        props.addNote(newnote)
        setNewNote({title: "",content: ""})
    }

    function handleExpand(){
        setExpand(true)
    }

    return(
        <div className="notebox">
            {isExpand&& <input type="text" value={newnote.title} name="title" onChange={newnotehandler} placeholder="Title" />}
            <textarea onClick={handleExpand} type="text"value={newnote.content}name="content" onChange={newnotehandler} placeholder="Take a note..." rows={isExpand? 2:1}/>
            <Zoom in={isExpand}>
            <button onClick={handleClick}><AddIcon/></button>
            </Zoom>

        </div>
    )
}

export default Notebox