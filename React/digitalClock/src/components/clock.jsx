import { useState,useEffect } from "react"

function Clock(){

    const [time , setTime] = useState(new Date())
    
    useEffect(()=>{
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);

        
        return ()=>{ //this ts the reason why we need use effect we don't want to run the intervalId after every second this will terminate if the component is missing or removed
            clearInterval(intervalId)
        }

    },[])

    function timeFormat(){
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const second = time.getSeconds()
        const meridium = hours >=12 ? "PM" : "AM"

        hours = hours%12 || 12;

        return `${zeroPad(hours)}:${zeroPad(minutes)}:${zeroPad(second)}:${meridium}`
    }

    function zeroPad(number){
        // if(number<10){
        //     return ("0" + number)
        // }else{
        //     return number
        // } instead of this code

        return (number < 10 ? "0" : "") + number
    }


    return(
        <div className="clockContainer">
            <h2>{timeFormat()}</h2>

        </div>
    )
}
export default Clock    