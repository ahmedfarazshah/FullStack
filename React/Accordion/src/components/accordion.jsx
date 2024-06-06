import data from "./data";
import { useState } from "react";

export default function Accordion(){

    const [selected, setSelected] = useState(null)

    function SingleHandleClick(index){
        setSelected(selected === index ? null : index)


    }


    return(
        <div className="mainAccordion">
            <div className="subAccordion">

            {data && data.length>0?
                data.map(value => 
                        <div className="item" onClick={()=>SingleHandleClick(value.id)}>
                            <div className="title"key={value.id}>
                                <h2>{value.question}</h2>
                                <span>+</span>
                            </div>
                        {selected === value.id ? <p>{value.answer}</p> : null}

                        </div>
                        

                ): <span>No data found!</span>
                
                
                
                
            }


            </div>








        </div>


    )
}