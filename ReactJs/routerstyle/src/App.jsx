import React from "react";
import './st.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {

  return (
    <Router>
   <Navbar/>
   <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
   </Routes>
   </Router>
  );
}
export default App;