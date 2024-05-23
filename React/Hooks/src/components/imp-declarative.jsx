//// React uses the declarative programming approach so that to render the new state you have to re-render the page 
////////////////////// for that React uses Hooks which re-render the state without re-rendering the page

function App(){


    var isDone = false
    function change(){
        // document.getElementById("root").style.textDecoration="line-through"/// this is imperative if you set this then you don't need to re-render page to see the change in state
        isDone = true       
        console.log("task completed")
     
    }
    function unchange(){
        isDone = false
        // document.getElementById("root").style.textDecoration=null
    }





/////////////////// Inorder to be change in the properties they need to be re-rendered


    return(
        <>
                <h2 style={isDone ? {textDecoration: "line-through"}: null}>task</h2>        
                <button onClick={change}>Done</button>
                <button onClick={unchange}>Not done</button>
        </>
    )
}

export default App