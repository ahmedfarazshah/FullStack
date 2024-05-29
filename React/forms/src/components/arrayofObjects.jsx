import { useState } from "react";

function App(){

    const [cars, setCars] = useState([])
    const [carYear, setYear] = useState(new Date().getFullYear())
    const [carMake, setMake] = useState("")
    const [carModel, setModel] = useState("")

    function carsHandler(){
        const newCar = {
            make : carMake,
            model : carModel,
            year: carYear
        }
        setCars((c)=> [...c, newCar])
        
        setYear(new Date().getFullYear())
        setMake("")
        setModel("")
    
    }

    function yearHandler(e){
        const value = e.target.value    
        setYear(value)
    }
    function makeHandler(e){
        const value = e.target.value
        setMake(value)
    }
    function modelHandler(e){
        const value = e.target.value
        setModel(value)
    }
    function removehandler(index){
        setCars(cars.filter((_, i)=> i!== index))
    }

    return(
        <>
            <h2>Cars List : </h2>
            <ul>
                {cars.map((car, index)=> <li key={index} onClick={()=>removehandler(index)}>
                     {car.make} {car.model} {car.year} 
                </li>)}


                
            </ul>

            <input type="number" name="year" value={carYear} placeholder="Year" onChange={yearHandler}/><br />
            <input type="text" name="make" id="" placeholder="Enter Car Make" value={carMake} onChange={makeHandler}/><br />
            <input type="text" name="model" id="" placeholder="Enter Car Model" value={carModel} onChange={modelHandler}/> <br />
            <button onClick={carsHandler}>Add Car</button>
        </>
    )
}
export default App