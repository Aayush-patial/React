import {useNavigate} from "react-router-dom";

function Footer (){
    const navigate = useNavigate();
    return (
        <>
        <footer className="footer">
       <a href="https://github.com/Aayush-patial/React.git">
        <button className="links" style={{ marginTop: '20px'}}>Github</button>
       </a>
       <a href="https://www.linkedin.com/in/aayush-patial-0a8759319">
        <button className="links" style={{ marginTop: '20px',marginLeft:"20px"}}>LinkedIn</button>
       </a>
       <a href="https://www.instagram.com/_thakur_ayush1/">
        <button className="links" style={{ marginTop: '20px',marginLeft:"20px"}}>Instagram</button>
       </a>
       </footer>
        </>
    )
}

export default Footer;