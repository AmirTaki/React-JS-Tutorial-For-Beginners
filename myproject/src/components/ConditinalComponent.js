import { useState } from "react"

export default function ConditinalComponent (){
    const [display, setDisplay] = useState(false)
    let output ;
    output =  display ? <h3>This is a conditional component</h3> : <h3>Nothing to see here</h3> 
    return(
        <>{output}</>
    )
}