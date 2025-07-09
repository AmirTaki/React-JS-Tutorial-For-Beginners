import { useState } from "react"

const Todo = () => {
    const [todo, setTodo] = useState();
    const handleChange = (e)=> {
        setTodo(e.target.value)
        console.log(todo)
    }
    return (
        <>
        <form>
            <input type = "text" value = {todo} onChange={handleChange}></input>
            <button type = "submit">Add</button>
        </form>
        
        </>
    )
}

export default Todo