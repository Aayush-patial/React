import Student from "./components/Student";
import Products from "./data/Products";
function App (){
  let arr =["Aayush patial","Aniket Sharma","Chandu Sharma","Abhinandan Sharma","Suraj Jaswal"];
  
  return (
    <>
    <Student name="Aayush Patial" age="20"></Student>
    <Student name=" Aniket Sharma" age="24"></Student>

    {arr.map((letter) =>{
      return <h1>{letter}</h1>
    })}

    {Products.map((product) =>{
      return(
      <div> 
        <h3>Product_Name : {product.name}</h3>
        <p> Price: {product.price}</p>
        <p> Desc: {product.desc}</p>
      </div>
      );
    })}
    </>
  )
};

export default App;