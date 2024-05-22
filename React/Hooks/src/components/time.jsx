import { useState } from "react";

////////////////////////// so the useState stored in the component where it is called thats why it is always used in a component

/// whem a state is runed all the states are runed after that

function App(){
    let time=new Date().toLocaleTimeString()

    
    
    const [currentTime , settoCurrent] = useState(time)

    function setTime (){
        let newtime = new Date().toLocaleTimeString()
            settoCurrent(newtime)
    }

    setInterval(() => {
       setTime() 
    }, 1000);

    



    return(
        <>
                
        <h1>{currentTime}</h1>
        <button onClick={setTime}>Current time</button>
        <br />
        {/* <li>Clock</li> */}
        {/* <h1>{ctime()}</h1> //// this wont work because you will have to restart to see the effect that why hooks are use */}

        </>
    )
}

export default App