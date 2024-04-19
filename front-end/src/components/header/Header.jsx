import React, { useState } from "react";
import logo from '../../assets/images/logo.png'; 
import "./header.css";

const Header = () => {

    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false);


  return (
    <header id="header" className="header fixed-top light">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
        <img src={logo} alt="My Logo" />
          <span>my driver app</span>
        </a>
        <nav id="navbar" className={Toggle ? "navbar-mobile" : "navbar"}>
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Our services</a></li>
            <li><a className="nav-link scrollto" href="#about">Join Our Team</a></li>
            <li className="dropdown">
              <a href="/#"><span>Pages</span> 
              <i className="bi bi-arrow-down-circle-fill"></i></a>
              <ul className={Toggle ? "dropdown-active" : ""}>
                <li><a href="/#">Drop Down 1</a></li>
                <li><a href="/#">Drop Down 2</a></li>
                <li><a href="/#">Drop Down 3</a></li>
                <li><a href="/#">Drop Down 4</a></li>
              </ul>
            </li>
            <li><a className="nav-link scrollto" href="#contact">Contact Us</a></li>
            <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={() => showMenu
            (!Toggle)}></i>
        </nav>
      </div>
    </header>
  )
}
export default Header