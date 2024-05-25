import { useState } from "react"

function App(){

    const [heading, setHeading] = useState("Hello")
    const [isMouseOver , setMouseOver] = useState(false)

    function submitx(){
        setHeading("Submitted")
    }

    function mouseExit(){
        setMouseOver(false)        
    }


    return(
        <>
            <div className="containerHandler">
                <h2>{heading}</h2>
                <input type="text"/>
                <button onClick={()=>setHeading("yoyo")}>Submit</button>
                <button onMouseOut={mouseExit} onMouseOver={()=>setMouseOver(true)} style={{backgroundColor : isMouseOver ? "black" : "white", color : "red "}} onClick={submitx}>Clickme</button>
            </div>



        </>
    )

}
export default App