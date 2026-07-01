import {useNavigate} from "react-router-dom";
function Content(){
    const navigate = useNavigate();
    return(
        <>
        <div className="content-grid">
            <div className="card">
                <h2> 1. React:</h2><br></br>
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                <img src ="https://tse2.mm.bing.net/th/id/OIP.SB2ZXE7YzXmsNd4GCi1GWQHaGl?rs=1&pid=ImgDetMain&o=7&rm=3" alt ="react" style={{width:"200px",height:"auto"}}></img>
                </a>
                
                <p  style={{marginLeft:"10px"}}>React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.</p>
            </div>
            <br></br>
            <div className="card">
                <h2>2. Node.js:</h2><br></br>
                <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">
                <img src ="https://miro.medium.com/v2/resize:fit:1000/1*3pPJQKaUEdqQUjkWge0M3g.png" alt ="nodejs" style={{width:"200px",height:"auto"}}></img>
                </a>
                
                <p  style={{marginLeft:"10px"}}>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server-side, enabling you to build scalable and high-performance web applications.</p>
            </div>
            <br></br>
            <div className="card">
                <h2>3. MongoDB:</h2><br></br>
                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                <img src ="https://miro.medium.com/v2/resize:fit:1200/1*ty8m8Y3dzgD6P5Xc17gbYw.jpeg" alt ="mongodb" style={{width:"200px",height:"auto"}}></img>
                </a>
                <p  style={{marginLeft:"10px"}}>MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It provides high performance, scalability, and ease of development for modern applications.</p>
            </div>
            <br></br>
            <div className="card">
                <h2>4. HTML:</h2><br></br>
                <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">
                <img src ="https://static.vecteezy.com/system/resources/previews/001/416/705/non_2x/html5-emblem-orange-shield-and-white-text-vector.jpg" alt ="html" style={{width:"200px",height:"auto"}}></img>
                </a>
                <p style={{marginLeft:"10px"}}>HTML (Hypertext Markup Language) is the standard markup language for creating web pages. It provides the structure and content of a webpage, allowing you to define headings, paragraphs, images, links, and more.</p>
            </div>
            <div className="card">
            </div>
        </div>
        </>
    )
}

export default Content;