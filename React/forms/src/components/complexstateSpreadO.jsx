import { useState } from "react";

function App(){

    const [car, setCar] = useState({
        make: "Tesla",
        model : "X",        
        year: 2024,
    })
    
    function allhander(eve){
        const {name, value} = eve.target
        setCar(c=>{
            if(name==="make")return{
                ...c, make: value
            };else if(name==="year")return{
                ...c, year: value
            };else if(name==="model")return{
                ...c, model: value
            }
        })

    }


//// the above function is make for these three
    // function makehandler(e){
    //     setCar(c=>({...c, make : e.target.value}))
    // }
    // function yearhandler(e){
    //     setCar(c=>({...c, year : e.target.value}))
    // }
    // function modelhandler(e){
    //     setCar(c=>({...c, model : e.target.value}))
    // }

    return(

    <div className="main">

        <form className="complexContainer">
           
            <h1>Vehicle : {car.make}&nbsp;{car.model} {car.year}</h1>
            <input type="text" name="make" placeholder="MAKE" value={car.make} onChange={allhander}/>
            <input type="text" name="model" placeholder="Model" value={car.model} onChange={allhander}/>
            <input type="text" name="year" placeholder="Year" value={car.year} onChange={allhander}/>
            <button onClick={e=>e.preventDefault()}>Submit</button>
        </form>
    </div>
        

    )
}

export default App