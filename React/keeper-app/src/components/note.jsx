import  Avatar ,{ Details } from "./avatar"


function NoteCard(props){
    return(
        <>
            <div className="note">
                <h3>{props.title}</h3>
                <p>{props.content}</p>

            </div>
        
        </>
    )
}

// setting props ///////////////////////////////////////////// so the value will be stored in the card component
function Card(props){
    
    return(
        <div className="card">
            <div className="top">
                <h3>{props.name}</h3>
                <Avatar img={props.img}/>
            </div>
            <div className="bottom">
                <Details country={props.country} cellNo={props.cellNo}/>
            </div>
        </div>

    )
}

export default NoteCard

export {Card}