function App(){

    const handleClick = ()=> {console.log("you clicked me")}
    const handleClick2 = (name)=> {console.log(`${name}: clicked me`)}
    const handleClick3 = (e) => e.target.hidden = true;
    const handleClick4 = e => e.target.textContent = "OUcH!"

    return(
        <>
            {/* <button onClick={handleClick2("faraz")}>Click me</button> this will call the function without pressing the button so we have to use another function that will call that function with the parameter */} 
            {/* <button onClick={()=>handleClick2("Lois")}>Click me</button> */}

            <button onDoubleClick={handleClick3}>Click me</button>
            <button onClick={handleClick4}>Click me</button>
        </>
    )
}

export default App