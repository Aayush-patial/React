import {useRef} from "react";

function Form (){
    const nameref = useRef(null);
    const emailref = useRef(null);
    const passwordref = useRef(null);
    function handelSubmit (){
        alert ("Name: " + nameref.current.value + " Email: " + emailref.current.value + " Password: " + passwordref.current.value + "  Your form is submitted successfully");
    }
    return(
        <>
        <form action = {handelSubmit}>
            <input ref={nameref} type="text" placeholder="Enter your name" /> <br></br>

            <input ref={emailref} type="email" placeholder="Enter your email" /> <br></br>
            <input ref={passwordref} type="password" placeholder="Enter your password" /> <br></br>  

            <button type="submit">Submit</button> 
        </form>
        
        </>
    )
}

export default Form;