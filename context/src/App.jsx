import Home from "./components/Home";
import userContext from "./context/userContext";

function App (){
  let user ="Aayush";
  return (
    <>
    <userContext.Provider value={user}>
      <Home></Home>
    </userContext.Provider>
    </>
  )
}

export default App