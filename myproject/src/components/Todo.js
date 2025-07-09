import style from "./style.module.css"

const Todo = () => {
    return (
        <>
            <div className={style.todoItem}>
                <h3 className={style.todoname}>Todo Item</h3>
                <button className={style.deletebutton}>Done</button>
            </div>
        </>
    )
}

export default Todo ;