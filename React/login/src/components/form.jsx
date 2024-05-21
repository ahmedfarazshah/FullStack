import Inputx from "./input"

function Form(){


    return(

        <form >
            <Inputx type="text" placeholder="Username"/>
            <Inputx type="password" placeholder="Password"/>
            <button type="submit">Login</button>
        </form>

    )
}

function RegisterUser(){


    return(
        <form>
            <Inputx type="text" placeholder="Username"/>
            <Inputx type="password" placeholder="Password"/>
            <Inputx type="password" placeholder="Confirm Password"/>
            <button type="submit">Register</button>

        </form>

    )
}


export default Form
export {RegisterUser}