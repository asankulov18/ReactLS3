import Description from "../../components/description/Description";

const AboutPage = () =>{
    const mainFunc = {
        title: "Title 2",
        description: "description 2"

    }
    return(
        <div>
            <Description mainFunc = {mainFunc}/>
            <h1>{mainFunc.title}</h1>
            <p>{mainFunc.description}</p>
        </div>
    )
}
export default AboutPage