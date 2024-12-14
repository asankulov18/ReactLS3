
import styles from "./Description.module.css";

function Description({ mainFunc }) {
    return (
        <div className={styles.people}>
            <h1 className={styles.text}>{mainFunc.title}</h1>
            <p>{mainFunc.description}</p>
        </div>
    );
}

export default Description;