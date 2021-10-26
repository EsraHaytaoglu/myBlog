import React from 'react';
import "../App.css";
import foto from "../images/logo.jpeg";
import Form from "./Form";

function Header() {
    return (
        <div>
        <a href="https://esracebii.com/" className="logo" target="_blank" rel="noreferrer">
		<img src={foto} alt="logo" />
	    </a>

  	<input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label htmlFor='menu-icon'></label>
  	<nav className="nav"> 		
  		<div className="form">
              <Form />
  		</div>
  	</nav>

  	<div className="section-center">
  		<h1 className="mb-0">My Blog</h1>
  	</div>
        </div>
    )
}

export default Header;
