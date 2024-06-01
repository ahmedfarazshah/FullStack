import { useState, useEffect } from "react"


function App(){


  const [count , setCount] = useState(0)
  const [text, setText]= useState("red")


  useEffect( ()=>{
    document.title = "on mounting " + count + " " + text 
  },[count]) //now this will only show text change  in the body not the title , you have 2 options either remove the whole array or add text stateful variable in the array
  function addCount(){  
    setCount(c => c +1)

  }

  function changeText(){
    setText(t=>(t === "red"?"green" : "red"))
  }

  return(
    <div>
        <p>{count}</p>
        <button onClick={addCount}>Increment</button>

        <h3 style={{color: text}}>{text}</h3>
        <button onClick={changeText}>Text change</button>


    </div>
  )
}

export default App