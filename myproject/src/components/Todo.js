import style from "./style.module.css"

const Todo = ({todoItem, todoList, setTodoList}) => {
    
    const deleteTodo = () => {
       const listNew =  todoList.filter((item) => (item.id !== todoItem.id))
        setTodoList(listNew)
    }
    return (
        <>
            <div className={style.todoItem}>
                <h3 className={style.todoname}>{todoItem.name}</h3>
                <button onClick={deleteTodo} className={style.deletebutton}>Done</button>
            </div>
        </>
    )
}

export default Todo ;