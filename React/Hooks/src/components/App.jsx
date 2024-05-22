import { useState } from "react"
import "./App.css"
//  state is always used in a component 
// state is basically current UI of the page , what if the state changes you have to restart/refresh the page
// to show change in state without the refresh we have Hooks // Hooks help you to render your UI dynamically

///////////////////////////////////Usestate Hook

// the returns an array, first is the value and 2nd is the function, the parameter of the function is assigned to first value
// but initally the parameter of the useState(*) is the value of first

//////////////// You cant use the function of useState outside a function as it is constantly rendering

function App() {

  const [count , setValue] = useState(0)
  function increse(){
    setValue(count + 1)
  }

  function decrese(){
    setValue (count -1)
  }
  // console.log(count)

  return(
    <>
      <h1>{count}</h1>
      <button onClick={increse}>+</button>
      <button onClick={decrese}>-</button>

    </>
  )
}

export default App
