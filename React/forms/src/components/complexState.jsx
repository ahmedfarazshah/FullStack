import { useState } from "react";

function App(){

    const [car, setName] = useState({
        car: "",
        lName: ""
    })

    function namehandler(e){

        const {value , name }= e.target
        
        setName((previous)=>{
            if(name === "fName"){
                return{
                    fName : value,
                    lName : previous.lName
                } 

            }else if(name === "lName"){ 
                return{  
                    fName : previous.fName,
                    lName : value
            }
            }
        })
    }


    return(

    <div className="main">

        <div className="complexContainer">
           
            <h1>Vehicle {name.fName}&nbsp;{name.lName}</h1>
            <input type="text" name="fName" placeholder="First Name" value={name.fName} onChange={namehandler}/>
            <input type="text" name="lName" placeholder="Last Name" value={name.lName} onChange={namehandler}/>
            <button>Submit</button>


        </div>
    </div>
        

    )
}

export default App