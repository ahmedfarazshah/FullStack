import { useState } from "react";

function CPicker(){

    const [color , setColor] = useState("#FFFFFF")

    return(
        <div className="color-picker-container">
            <h2>Color Picker</h2>

            <div className="color-picker-box" style={{background: color}}>
                <p>Color : {color}</p>
            </div>

            <label>Color</label>
            <input type="color" value={color} onChange={(e)=>setColor(e.target.value)} />


        </div>
    )
}
export default CPicker