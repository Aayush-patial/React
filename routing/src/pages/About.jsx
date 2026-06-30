import { useNavigate } from "react-router-dom";

function About (){
    const navigate = useNavigate();
    return (
        <>
        <div className="about-container">
        <h1>About us</h1>
        <p>
            Welcome to our Website! We aim to provide high-quality content and services.
        </p>

        <h2> Our Mission</h2>
        <p>
            To help users learn web development easilty and practically.
        </p>
        </div>
        </>
    )
}

export default About; 