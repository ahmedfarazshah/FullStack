import emoji from "./emoji"
import "./App.css"
import Card from "./Components/card"

function createCard(emojx){
  return (
    <Card emoji={emojx.emoji} name={emojx.name} meaning={emojx.meaning}/>
  )
}


function App() {

  return (
    <>
      <div className="title">
        <h1>EmojiPedia</h1>
      </div>

      {emoji.map(createCard)}
      {emoji.map(modi =>(
          <Card emoji={modi.emoji} name={modi.name} meaning={modi.meaning}/>
      ))};
    </>
  )
}

export default App
