import userContext from "../context/userContext";
import { useContext } from "react";
function Home(){
    const user= useContext(userContext);
    return(
        <>
        <h1> Hello {user}</h1>
        </>
    )
}

export default Home;