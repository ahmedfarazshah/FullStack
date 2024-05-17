// no need to import the app.css file as it is available globally in the app.jsx file
// you can do moduleing if you intened to be specific
// import styles from "./app.css"   /// if you dont use this, then a conflit will occur 
// you cant use the same variable for 2 files or else your whole app will show an errrrrrrrrrorrrrrrrrrr but it wont display

function Greet(){
    const gm = "Good morning"
    // const an = "Good Afternoon"
    // const eve = "Good Evening"



    return(
        <>
        
            <h1 className="header">{gm}</h1> 

        

        </>

    )

}

export default Greet