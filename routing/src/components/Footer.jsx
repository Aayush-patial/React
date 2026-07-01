import {useNavigate} from "react-router-dom";

function Footer (){
    const navigate = useNavigate();
    return (
        <>
       <a href="https://github.com/Aayush-patial/React.git">
        <button className="github" style={{ marginTop: '20px'}}>Github</button>
       </a>
        </>
    )
}

export default Footer;