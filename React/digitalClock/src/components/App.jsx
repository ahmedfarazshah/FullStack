import { useEffect } from "react";
import Clock from "./clock";


function App(){

  useEffect(()=>{
    document.title = "Digital Clock"


  })


  return(
    <>
      <Clock/>
      </>
  )
}

export default App