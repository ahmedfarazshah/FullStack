import profilePicture from "./assets/ava.jpg"
import PropTypes from "prop-types" // if something is present in the node modules then no need to specify the location

function Card (){


    return(
        <>
            <div className="card-container">
                <img src={profilePicture} alt="avatar profile picture" />
                <h2>MERN!</h2>
                <p>A blockchain developer with exceptional skills</p>

            </div>
        
        
        </>


    )
}


function Student(props){


    return(
        <div className="stuCard">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>isStudent : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )

}
Student.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool
}

Student.defaultProps = {
    name : "Guest",
    age : 0,
    isStudent : false
}


export default Card
export {Student}