import React from "react";
import "./Navbar.css"
import Logo from "../assets/images/menu-icon.png"
import Down_img from "../assets/images/drop_down.png"
const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="logo">
            <a href="http://www.neuspaarx.com"><span class="big-font">n</span>eu<span class="big-font">s</span>paar<span class="big-font">x</span></a>
        </div>
        <ul className="nav-links">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#services">Services</a></li>
          <li className="nav-item"><a href="#contact">Resources</a></li>
          <li className="nav-item"><a href="#home">Industries</a></li>
          <li className="nav-item"><a href="#home"><button className="btn btn-nav">Contact Us</button></a></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;