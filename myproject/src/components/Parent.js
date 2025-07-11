import { useState } from "react"
import Child from "./Child"


const Parent = () => {
    const [parentCount, setParentCount] = useState(0)
    const [childCount, setChildCount] = useState(0)
    const changeParentCount = () => {
        setParentCount(  parentCount + 1)
    }
    const changeChildCount = () => {
        setChildCount(childCount + 1)
    }
    return (
        <>
            <div>This is a parent component</div>
            <h1>Parent count is {parentCount}</h1>
            <Child count = {childCount} setCount = {setChildCount}/>
            <button onClick={changeParentCount}>Increment parent count</button>
            <hr />
            <button onClick = {changeChildCount}>Increment child count</button>
        </>
    )
}

export default Parent