import {BrowserRouter ,Routes , Route, Router} from 
'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./pages/content";
function App(){
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element ={<Home></Home>}></Route>
      <Route path='/about' element ={<About></About>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/content' element={<Content></Content>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App;