import Header from "./header"
import Footer from "./footer"
import Note,{Card} from "./note"
import "./App.css"
import contact from "../contact"
import Avatar from "./avatar"

function createCard(contactx){
    return (
        <Card key={contactx.id} name={contactx.name} img={contactx.img} country={contactx.country} cellNo={contactx.cellNo}/>
    )
}


function App(){
    
    
    return( 
        <>
            <Header />
            <Note />
            <Note />     
            <Note />    
                <br />
                <h1 style={{display: "inline-block", textAlign: "center"}}>My Contacts :  </h1>
                <Avatar img="https://avatars.githubusercontent.com/u/76395724?v=4"></Avatar>
                <br />
                {/* <Card name="Ahmed Faraz Shah" country="Pakistan" cellNo="0234" img="https://w7.pngwing.com/pngs/490/157/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png"/> */}
                <Card name="Mike Anderson" country="England" cellNo="023432424" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9iANl__EiSH0ikpD3Nmlh68Og_NQlE01PzND_uEJbtQ&s"/>
                {/* using map for the array */}
                {/* <Card name={contact[2].name} img={contact[2].img} country={contact[2].country} cellNo={contact[2].cellNo}/> */}
                {/* <Card name={contact[1].name} img={contact[1].img} country={contact[1].country} cellNo={contact[1].cellNo}/> */}
                {contact.map(createCard)}






            <Footer />
        </>
    )

}
export default App