import "./App.css"
import Card,{Student} from "./card"

function App(){


  
  return(
    <>
      <h1>Hello World</h1>
      <Card></Card>
      <Card/>
     <Card/>
    <br />
      <Student name="brocode" age={33} isStudent={true}/>
      <Student name="brocode" age="lk" isStudent={true}/>
      <Student />
    </>


  )

}

export default App