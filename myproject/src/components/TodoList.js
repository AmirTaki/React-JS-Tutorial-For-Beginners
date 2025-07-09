import Todo from "./Todo"

const TodoList = ({todoList, setTodoList}) => {
    return (
        <>
            {todoList.map((todoItem, index) => (
             <Todo key = {index} todoItem = {todoItem} />
            ))}
        </>
    )
}

export default TodoList