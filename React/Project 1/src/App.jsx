import Header from "./header.jsx"
import "./app.css" // this is another aproach for styling in react
import Greet from "./greetings.jsx"
import {add, subtract, multiply, divide} from "./calculator"


function App(){

  const luckyNumbet = 3
  const date = new Date

  const imagesSize = { // for inline css in React
    width : "100px",
    height : "100px"
  }

  const imagex = "https://picsum.photos/200"
  return( 
    <>
      
      <h1>Hello World</h1>
       <Header/>
      <ul>
        <li>what do you think</li>  
        <li>Year : {date.getFullYear()}</li>  
        <li>Random Number {Math.floor(Math.random()*10)}</li>  
        <li>my lucky number is {luckyNumbet}</li>  
      </ul>    

      <div className="imagesContainer">
        <h1>UI Frameworks</h1>
        <img src="https://images.surferseo.art/69731114-1f60-4e32-b617-1529c4686e30.png" alt="React logo" />
        <img style={imagesSize} src={imagex + "?grayscale"} alt="Random image" />
        <img src="https://blog.getbootstrap.com/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap logo" />
        </div>
        <Greet />
        <Greet />
        <Greet />
      <h1>Time In Hours : {date.getHours()}</h1>


      <h2>Math </h2>
      <ul>
       <li>{add(2,3)}</li>
       <li>{multiply(2,3)}</li>
       <li>{subtract(2,3)}</li>
       <li>{divide(2,3)}</li>
      </ul>

    </>
  )
}

export default App