import "./App.css"
import Header from "./header"
import Footer from "./footer"
import NoteCard from "./note"
import notes from "../notes"

function App(){

    


    return( 
        <>
            <Header/>
            {/* <NoteCard key={notes.map(value=>value.id)} title={notes.map(value=>value.title)} content={notes.map(value=>value.content)} />             */}
            {/* you dont have to make component first run a map function so that for each iteration it willl create an card */}

            {notes.map(value=> <NoteCard key={value.id} title={value.title} content={value.content}/>)}




            <Footer/>
        </>
    )
}


export default App