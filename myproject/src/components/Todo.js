import style from "./style.module.css"

const Todo = ({todoItem}) => {
    return (
        <>
            <div className={style.todoItem}>
                <h3 className={style.todoname}>{todoItem.name}</h3>
                <button className={style.deletebutton}>Done</button>
            </div>
        </>
    )
}

export default Todo ;