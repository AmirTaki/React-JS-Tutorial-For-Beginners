import style from "./style.module.css"
const Form = ({todo, setTodo, todoList, setTodoList}) => {
   
    const handeChange = (e) => {
        setTodo(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setTodoList([...todoList, todo])
        setTodo('')
    }
    return(
        <div className={style.todoform}>
            <form onSubmit={handleSubmit}>
                <input 
                    value = {todo} 
                    onChange={handeChange}
                    className={style.todoinput} 
                    placeholder="Add Todo Item"
                >
                </input>
                <button 
                    className={style.todobutton}
                    type = "submit"
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default Form