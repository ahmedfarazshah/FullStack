import { fruits,vegetables,newx2 } from "./data"
import List from "./list"




function App(){

  return(
    <>
      <List items={fruits} category="Fruits"/>
      <List items={vegetables} category="Vegetables"/>
      <List items={newx2} category="Vegetables"/>


    </>
  )
}


export default App