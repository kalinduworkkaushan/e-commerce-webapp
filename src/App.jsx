import Home from "./Components/Home/Home"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Login from "./Components/SignUp/SignUp"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
    <nav>
      <Link to="/home">Home</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/navbar" element={<Navbar/>} />
      <Route path="/home" element={<Home/>} />
     </Routes>
     </BrowserRouter>
     <Footer/>
    </>
  )
}

export default App