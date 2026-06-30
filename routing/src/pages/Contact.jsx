import { Navigate, useNavigate } from "react-router-dom";

function Contact (){
    const navigate = useNavigate();
    return (
        <>
        <div className="contact-container">
       <h1>Contact Us</h1>
       <p>We'd love to hear from you ! Reach out using the details below.</p>

       <h2>Email</h2>
       <p>thakuraayush1522@gmail.com</p>

       <h2>Phone</h2>
       <p>+91 8988203462</p>

       <h2>Social links</h2>
       <a href="https://github.com/Aayush-patial/React.git">Github</a>
       <a href="www.linkedin.com/in/aayush-patial-0a8759319">LinkedIn</a>

       <h2>Contact Form</h2>
       <form className="form">
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email"/>
        <textarea name="" id="" placeholder="Your Message"></textarea>
        <button type="submit"> Send message</button>
       </form>
    </div>
        </>
    )
}

export default Contact;