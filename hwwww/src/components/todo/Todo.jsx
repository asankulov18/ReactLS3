import styles from "./Todo.module.css"
const Todo =({todo}) =>{
    return(
        <div className={styles.todo}>
            <p className={styles.text}>{todo}</p>
        </div> 
    )
}
export default Todo;