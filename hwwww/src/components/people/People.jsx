import styles from "./People.module.css"
const People =({name, age}) =>{
    return(
        <div className={styles.people}>
            <h3 className={styles.people} >Name:{name}, Age:{age}</h3>

        </div>
    )
}
export default People