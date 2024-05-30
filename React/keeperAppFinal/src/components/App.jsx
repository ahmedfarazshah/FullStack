import Footer from "./footer"
import Header from "./header"
import Notebox from "./notepad"
import { useState } from "react"
import KeeperNotes from "./keeperfiles"

function App(){

    const [notes, setNotes] = useState([])


    function addNewNote(newnote){
      if(newnote.title.trim() !== ""){
      setNotes(n=> [...n, newnote])

    }else{
      alert("title can't be empty")
    }}


    function removeNote(index){ 
      setNotes(n=>n.filter((_,i)=>i!==index))
    }


  return(
    <div className="main">
      <Header/>
      <Notebox  addNote={addNewNote}/>

      {notes.map((keepernotes, index)=>( 
        <KeeperNotes key={index} id={index} title={keepernotes.title} content={keepernotes.content} delete={removeNote}/>
      ))}

      <Footer/>
    </div>

  )
}
export default App