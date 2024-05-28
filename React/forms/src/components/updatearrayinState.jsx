import { useState } from "react";

function App(){

    const [languages, setLanguage] = useState(['javascript', "c++", "python", "rust"])

    function languageshanlder(){
        const newlang = document.getElementById("newvalue").value   
        document.getElementById('newvalue').value = ""

        setLanguage((l)=> ([...l, newlang]))
    }   
    function removelang(index){
        setLanguage(languages.filter((_, i)=> i!== index)) //////////// _ is conventional if you want to ignore: these were the element of the languages array
    }



    return(
     <div className="languages">
        {languages.map((lang,index)=> <li key={index} onClick={()=>removelang(index)}>{lang}</li>)}
        <input type="text" id="newvalue"/>  
        <button onClick={languageshanlder}>ADD</button>      
   
     </div>   
    )
}
    export default App