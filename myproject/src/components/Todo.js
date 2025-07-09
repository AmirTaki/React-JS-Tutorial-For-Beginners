import { useState } from "react"
import ListItem from "./ListItem";

const Todo = () => {
    const [todo, setTodo] = useState();
    const [todoList, setTodoList] =  useState([])
    const handleChange = (e)=> {
        setTodo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let tempList = todoList
        tempList.push(todo)
        setTodoList(tempList)   
        console.log(todoList)
        setTodo('')
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type = "text" value = {todo} onChange={handleChange}></input>
            <button type = "submit">Add</button>
        </form>
        {todoList.map((item)=> (<ListItem key = {item} item = {item}/>))}
        
        </>
    )
}

export default Todo