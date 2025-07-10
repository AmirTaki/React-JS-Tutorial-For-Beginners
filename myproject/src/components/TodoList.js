import Todo from "./Todo"

const TodoList = ({todoList, setTodoList}) => {
    return (
        <>
            {todoList.map((todoItem, index) => (
             <Todo key = {todoItem.id} todoItem = {todoItem} />
            ))}
        </>
    )
}

export default TodoList