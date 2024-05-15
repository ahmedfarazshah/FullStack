import React from "react"; 
import ReactDOM from "react-dom"
import createRoot from "react-dom/client"

// ReactDOM.render(<h1>hello World</h1>, document.getElementById("root")) this is depricated

const root = createRoot(document.getElementById("root"))
root.render(<h1>hello world</h1>) // this only takes one input but you can make child of one div 