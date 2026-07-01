import Home from "./components/Home";
import userContext from "./context/userContext";

function App (){
  let obj = {id: 12401596, name: "John Doe", email: "john.doe@example.com"};
  return (
    <>
    <userContext.Provider value={obj}>
      <Home></Home>
    </userContext.Provider>
    </>
  )
}

export default App