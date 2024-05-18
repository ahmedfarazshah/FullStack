function Footer(){
    const date = new Date

    const footerstyles = {
        color:" white",
        textAlign: "center",
        position: "absolute",
        left: "0",
        right : "0",
        bottom: "10px",

    
    }

    return(
        <footer style={footerstyles}>
            <p>Copyright &copy; {date.getFullYear()}</p>
        </footer>
    )
}

export default Footer