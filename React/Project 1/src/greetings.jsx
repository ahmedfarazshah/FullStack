// no need to import the app.css file as it is available globally in the app.jsx file
// you can do moduleing if you intened to be specific
// import styles from "./app.css"   /// if you dont use this, then a conflit will occur 
// you cant use the same variable for 2 files or else your whole app will show an errrrrrrrrrorrrrrrrrrr but it wont display
import coloring from "./coloring.module.css" // this is the naming convention for styling in react


function Greet(){

    const time = new Date()
    const currenttime = time.getHours()
    
    const customstyle = {
        color : ""
    }

    let greetings;
    if(currenttime <= 12 ){
        greetings = "Good Morning"
        customstyle.color = "red"
    }else if (currenttime < 18){
        greetings = "Good Afternoon"
        customstyle.color = "green"
    }else{
        greetings = "Good Evening"
        customstyle.color = "blue"
    }


    return(
        <>
        
            <h1 className={coloring.hyper} style={customstyle}>{greetings +" : "+ currenttime} </h1> 

        

        </>

    )

}

export default Greet