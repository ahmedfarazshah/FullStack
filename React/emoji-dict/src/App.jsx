import emoji from "./emoji"
import "./App.css"
import Card from "./Components/card"

function createCard(emojx){
  return (
    <Card key={emojx.id} emoji={emojx.emoji} name={emojx.name} meaning={emojx.meaning}/>
  )
}


function App() {

  return (
    <>
      <div className="title">
        <h1>EmojiPedia</h1>
      </div>

      {emoji.map(createCard)}
      {emoji.map(modi =>( ///no return and {} required because it is one line of code
          <Card key={modi.id} emoji={modi.emoji} name={modi.name} meaning={modi.meaning}/>
      ))};
    </>
  )
}

export default App
