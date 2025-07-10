import style from "./style.module.css"
import shortid from "shortid"

const Form = ({todo, setTodo, todoList, setTodoList}) => {
   
    const handeChange = (e) => {
        setTodo(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setTodoList([...todoList, {name : todo, id : shortid.generate()}])
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