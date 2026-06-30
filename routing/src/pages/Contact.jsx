import { Navigate, useNavigate } from "react-router-dom";

function Contact (){
    const navigate = useNavigate();
    return (
        <>
        <h1>This is a contact page</h1>
        <button onClick={()=> navigate("/about")}>About us</button><br></br> <br></br>
        <button onClick={()=> navigate("/")}>Home</button>
        </>
    )
}

export default Contact;