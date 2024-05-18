import Header from "./header"
import Footer from "./footer"
import Note,{Card} from "./note"
import "./App.css"
import contact from "../contact"

function App(){
    
    console.log(contact)
    
    return( 
        <>
            <Header />
            <Note />
            <Note />    
            <Note />    
            <Card name="Ahmed Faraz Shah" country="Pakistan" cellNo="0234" img="https://w7.pngwing.com/pngs/490/157/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png"/>
                <hr />
                <h1>My Contacts</h1>
            <Card name="Mike Anderson" country="England" cellNo="023432424" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9iANl__EiSH0ikpD3Nmlh68Og_NQlE01PzND_uEJbtQ&s"/>

            <Card name={contact[2].name} img={contact[2].img} country={contact[2].country} cellNo={contact[2].cellNo}/>






            <Footer />
        </>
    )

}
export default App