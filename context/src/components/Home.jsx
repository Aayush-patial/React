import userContext from "../context/userContext";
import { useContext } from "react";
function Home(){
    const user= useContext(userContext);
    return(
        <>
        <h1> Hello {user.name}!</h1>
        <p>ID: {user.id}</p>
        <p>Email: {user.email}</p>
        </>
    )
}

export default Home;