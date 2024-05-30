import Footer from "./footer"
import Header from "./header"
import Notebox from "./notepad"
import { useState } from "react"

function App(){

    const [notes, setNotes] = useState([])

    function addNewNote(newnote){
      if(newnote.title.trim() !== ""){
      setNotes(n=> [...n, newnote])
        console.log(notes)
    }else{
      alert("title can't be empty")
    }}


    function removeNote(index){
      setNotes(notes.filter((_, i)=>i!==index))
    }


  return(
    <div className="main">
      <Header/>
      <Notebox addNote={addNewNote}/>

      {notes.map((note, index)=>{
        <div className="keepernotes" key={index}>
          <p>{note.title}</p>
          <p>{note.content}</p>
          <button onClick={()=>removeNote(index)}>del</button>
        </div>
      })}








      <Footer/>
    </div>

  )
}
export default App