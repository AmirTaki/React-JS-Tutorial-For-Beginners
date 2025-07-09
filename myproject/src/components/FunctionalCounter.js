import { useState } from "react"

const FunctionalCounter = () => {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(counter + 1)
    }
    return(<>
        <div> Counter value : {counter}</div>
        <button onClick = {increment}>increment</button>
    </>)
}
export default FunctionalCounter 