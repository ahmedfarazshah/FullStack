import Form,{RegisterUser} from "./form"
import "./App.css"

function App(){

  const userRegistered = false


  return(
    <>
      {/* {userRegistered ? <Form/> : <h2>Please login </h2>} */}
      {userRegistered ? <Form/> : <RegisterUser/>}

    </>
  )
}

export default App