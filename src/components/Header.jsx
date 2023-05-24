import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
import '../styles/Header.css';



function Header() {
	return (
		<header className='header'>
			<div className="logo">
                <img className="logo-image" src={logo} alt="logo du site Kasa" />
            </div>
            <div className="nav">
                <ul>
                    <NavLink to={"/"} className="nav-link">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to={"/about"} className="nav-link">
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </div>
		</header>
	)
}

export default Header