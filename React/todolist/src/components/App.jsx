import { useState } from "react"

function App() {

  const [todoitem , settodoItem] = useState([])
  


  function todohandle(){
    const newtodoItem = document.getElementById("newTodo").value
    document.getElementById("newTodo").value=""
  
    settodoItem(t=> ([...t, newtodoItem]))

  }

  function removetodoitem(index){
    settodoItem(todoitem.filter((_, i)=>(i!==index)))
  }

  return(
    <div className="todolistContainer">
      <h2>To-Do List</h2>
      <div className="inpBut">
        <input type="text" id="newTodo"/>
        <button onClick={todohandle}>Add</button>
      </div>

      <ul>
          {todoitem.map((items, index)=> (<li key={index} onClick={()=>removetodoitem(index)}>{items}</li>))}
      </ul>

    </div>

  )

}

export default App
