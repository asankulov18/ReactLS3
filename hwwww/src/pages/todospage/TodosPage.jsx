import Todo from "../../components/todo/Todo"
import styles from "./Todopage.module.css"

const TodoFunc = () =>{
    const todo_number = ["todo 1", "todo 2", "todo 3"]
    return(
        <div className={styles.TodoPage}>
            {todo_number.map((todo,index)=>(
            <Todo key={index} todo={todo}/>
                ))}

        </div>
    )
}

export default TodoFunc