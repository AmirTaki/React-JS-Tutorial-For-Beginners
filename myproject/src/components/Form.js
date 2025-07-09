import style from "./style.module.css"
const Form = () => {
    return(
        <div className={style.todoform}>
            <form >
                <input className={style.todoinput} placeholder="Add Todo Item"></input>
                <button className={style.todobutton}>Add</button>
            </form>
        </div>
    )
}

export default Form