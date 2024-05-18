function Note(){



    return(
        <>
            <div className="note">
                <h3>This is a note Title</h3>
                <p>This is a note Content</p>

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
                <img src={props.img} alt="avatar icon" />
            </div>
            <div className="bottom">
                <p>Country : {props.country}</p>
                <p>Phone : {props.cellNo}</p>
            </div>
        </div>

    )
}

export default Note

export {Card}