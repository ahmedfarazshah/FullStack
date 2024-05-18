function Footer(){
    const date = new Date

    const footerstyles = {
        color:" white",
        textAlign: "center",
        position: "absolute",
        bottom: "10px",
        left: "0",
        right : "0",

    
    }

    return(
        <footer style={footerstyles}>
            <p>Copyright &copy; {date.getFullYear()}</p>
        </footer>
    )
}

export default Footer