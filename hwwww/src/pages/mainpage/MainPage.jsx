import Description from "../../components/description/Description";
import People from "../../components/people/People";
import styles from "./MainPage.module.css"

function MainPage() {
    const mainFunc = {
        title: "Title",
        description: "description"
    };

    const numbers = [
        { id: 1, age: 25, name: 'John' },
        { id: 2, age: 30, name: 'Alice' },
        { id: 3, age: 22, name: 'Bob' }
    ];

    return (
        <div className={styles.MainPage}>
            <Description mainFunc={mainFunc} />
            <h2 className={styles.text}>MainPage</h2>
            {
                numbers.map((el) => (
                    <People key={el.id} age={el.age} name={el.name} />
                ))
            }
        </div>
    );
}

export default MainPage;