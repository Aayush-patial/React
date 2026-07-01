import { useRef } from "react";
import Form from "./components/Form";

function App(){
  const inputRef = useRef(null);
  function focus (){
    inputRef.current.focus();
  }
  return(
    <>
      <input ref={inputRef} type="text" placeholder="Enter text here" />
      <button onClick={focus}>Submit</button> <br></br>
      <br></br>
      <Form></Form>
    </>
  )
}

export default App;