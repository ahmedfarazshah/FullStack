

function Avatar(props){


    return(
        <img className="circle-image" src={props.img} alt=" profile picture avatar" />
    )
}

function Details(props){



    return(
        <div className="details">
            <p>{props.country}</p>
            <p>{props.cellNo}</p>
        </div>        
    )
}
export default Avatar
export { Details}