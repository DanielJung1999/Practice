import React from 'react';
import ReactDOM from 'react-dom';
import ReactLogo from '../Images/react-logo.png'
import "../style.css";

export default function Navbar() {
    return(
        <nav className='navbar'>
            <img src={ReactLogo} className='nav--logo'></img>
            <h2 className='nav--logo_text'>ReactFacts</h2>
            <h3 className='nav--title'>React - Project 1</h3>
        </nav>
    )
}