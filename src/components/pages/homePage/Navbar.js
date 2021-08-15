import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import brand from '../../../images/brand.png';
const Navbar = ({ toggleSidebar }) => {


    const [click, setClick] = useState(false);
    const [show, setShow] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <div class="topnav" id="myTopnav">
                <a href="/" style={{float:'left'}}><img src={brand} className="logo" alt="" /></a>
                <a href="#news">
                    <button type="button" className="btn-vote"><i class="far fa-check-circle"></i> Vote</button>
                </a>
                <a href="#news">
                    <button type="button" className="btn-connect-wallet">Connect Wallet</button>
                </a>
                <a href=""><i className="fas fa-search" onClick={() => setShow(true)} id="searchIcon"></i></a>
                <a href="#news">
                    <form>
                        <input type="text" style={{ display: show ? "block" : "none" }} className="nav-search" id="search" />
                    </form>
                </a>
                <a href=""><i className="fas fa-user"></i></a>
                <a href="#contact"><i className="far fa-bell"></i></a>
                <a href="#about"><i className="far fa-envelope"></i></a>
                <a href="javascript:void(0);" className="icon" onclick="myFunction()">
                    <i className="fa fa-bars"></i>
                </a>
            </div>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="all" onClick={toggleSidebar}>
                        <i className="fas fa-bars"></i>
                        <span> All</span>
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
                                Manager
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/modarator"
                                activeClassName=""
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Modarator
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/core-team"
                                activeClassName=""
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Core Team
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

export default Navbar;