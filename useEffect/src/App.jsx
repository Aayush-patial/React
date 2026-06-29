import { useEffect, useState } from "react";

function App (){
  const [count,setCount]=useState(0)
  useEffect (() => {
    document.title = `${count}`;
  },[count]);//runs everytime when the variable count changes 

  useEffect (() =>{
    console.log("Hello World");
  },[]);//work on first render

  useEffect(()=>{
    console.log("Hello world ");
  });//Work on every render
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=> setCount(count+1)}>+</button>
    </>
  )
}

export default App;