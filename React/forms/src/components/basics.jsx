////// Event handler : Onchange : used primarily with the form elements
/// ex: input , textarea , select  , radio,
// this eventhandler triggers a function everytime the value of input changes



import { useState } from "react";

function App(){
    
    const [name , nameChange] = useState("Guest")
    const [comment , setComment] = useState("")
    const [quantity , setQuantity] = useState(1)
    const [orderStatus , setOrderStatus] = useState("")
    const [applicationStatus, setApplication] = useState("")
    const [clickName , setNameOnClick] = useState("")
    const [heading , setHeading] = useState("")

    function nameHandler(e){
        nameChange(e.target.value)
    }
    function quantityHandler(e){
        setQuantity(e.target.value)
    }
    function orderHandler(e){
        setOrderStatus(e.target.value)
    }
    function applicationHandler(e){
        setApplication(e.target.value)
    }
    function submitHandler(e){
        setHeading(clickName)
        e.preventDefault() // this will prevent the default refresh mechansism of the page that was to refresh after submit
    }


    return(
        <>
            <input  onChange={nameHandler} value={name} />
            <p>Name : {name}</p>

            <textarea name="" placeholder="Write your comment!" onChange={(e)=>setComment(e.target.value)} value={comment}></textarea>
            <p>comment : {comment}</p>

            <input type="number" onChange={quantityHandler} value={quantity} />
            <p>Orders : {quantity}</p>


            <select onChange={orderHandler} value={orderStatus}>
                <option value="">what todo!</option>
                <option value="Buy">Buy</option>
                <option>Add to card</option>
            </select>
            <p>Order Status : {orderStatus}</p>


            <input type="radio" value="Submitted" checked={applicationStatus === "Submitted"} onChange={applicationHandler}/><label>Submitted</label><br />
            <input type="radio" value="Pending" checked={applicationStatus === "Pending"} onChange={applicationHandler} /><label>Pending</label><br />
            <input type="radio" value="In Process" checked={applicationStatus === "In Process"} onChange={applicationHandler} /><label>In Process</label><br />
            <p>Application Status : {applicationStatus}</p>

            <hr />
                <form onSubmit={submitHandler}>
                    <h2>Hello {heading}</h2>
                    <input type="text" placeholder="What's your Name?" value={clickName} onChange={(e)=>setNameOnClick(e.target.value)}/>
                    <br />
                    <button type="submit">Submit</button>    
                </form>

        </>
    )
}
export default App