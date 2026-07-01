import {useNavigate} from "react-router-dom";

function Home (){
    const navigate = useNavigate();
    return (
        <>
        <img src="https://img.freepik.com/premium-vector/web-development-technology-template_1051058-882.jpg?w=2000" alt="wbedev" style={{ width: '400px', height: 'auto' }}></img>
        <h1> Welcome to Aayush's WebDev World - Learn,Build, and Grow!</h1><br></br>
        <p> Empowering developers to create amazing web experiences. </p>
        <button className="getStarted" style={{marginRight: '20px', marginLeft: '20px'}} onClick={() => navigate('/content')}>Get Started</button>
        </>
    )
}

export default Home;