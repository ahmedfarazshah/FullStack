import profilePicture from "./assets/ava.jpg"


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

export default Card