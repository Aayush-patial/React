import {Link} from "react-router-dom";
function Navbar (){
    return (
        <>
        <nav className="navbar">
         <Link to ="/">Home</Link> <br></br> <br></br>
         <Link to="/about">About</Link><br></br> <br></br>
         <Link to="/contact"> Contact us</Link>
         </nav>
        </>
    )
}

export default Navbar