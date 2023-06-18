import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import "./components/style.css";
import Signin from "./components/Signin";
import WhoAreWe from "./components/WhoAre";
import Login from "./components/Login";
import Donation from "./components/donation";
import Footeer from "./components/Footer";
import Getinvolved from "./components/Getinvolved";
import Contact from "./components/Contant";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/whoarewe" element={<WhoAreWe />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/getinvolved" element={<Getinvolved />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footeer />
      </div>
    </>
  );
}

export default App;
