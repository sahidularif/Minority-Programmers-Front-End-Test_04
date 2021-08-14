import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import brand from '../../images/brand.png';
const Arif = ({toggleSidebar})=> {


    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>

            <div class="topnav" id="myTopnav">
                <img src={brand} alt="" />
                <a href="#home" class="">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
            </div>

            <nav className="navbar">
                <div className="nav-container">
                    <div className="all" onClick={toggleSidebar}>
                        <i className="fas fa-bars"></i>
                        <span>All</span>
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName=""
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/user"
                                activeClassName=""
                                className="nav-links"
                                onClick={handleClick}
                            >
                                User
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/manager"
                                activeClassName=""
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Project
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeClassName=""
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Team
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Arif;