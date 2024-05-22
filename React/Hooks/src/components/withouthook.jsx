function App(){

    var count = 0
    function increase(){
        count++
        console.log(count)

    }



    return(
        <>

            <h1>{count}</h1>
            <button onClick={increase}>+</button>


        
        </>
    )


}

export default App