import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import brand from '../../images/brand.png';
import './NavbarStyle.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <Image src={brand} alt="minority logo" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <div className={click ? 'nav-menu active' : 'nav-menu'}>

                        <div className='nav-item'>
                            <span
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                <i class="far fa-envelope" />
                            </span>
                        </div>
                        <div className='nav-item'>
                            <span
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                <i class="fas fa-bell" />
                            </span>
                        </div>
                        <div className='nav-item'>
                            <span
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                <i class="far fa-user-circle" />
                            </span>
                        </div>
                        <div className='nav-item'>
                            <span
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                <button className="btn btn-light btn-sm">Connect Wallet</button>
                            </span>
                        </div>
                        <div className='nav-item'>
                            <span
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                <button type="button" className="btn btn-light btn-sm">
                                    <i class="far fa-check-circle" />
                                    Vote
                                </button>
                            </span>
                        </div>
                    </div>

                </div>
                <div className='navbar-container'>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                <span
                                    className='nav-top-links d-flex w-100 justify-content-center'
                                    onClick={closeMobileMenu}
                                >
                                    <button type="button" class="btn btn-primary">
                                        Sign in
                                    </button> &nbsp; OR &nbsp;
                                    <button type="button" class="btn btn-warning">
                                        Register
                                    </button>
                                </span>

                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/user' className='nav-links' onClick={closeMobileMenu}>
                                User
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/pmpage'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Project Manager
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/products'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                <span
                                    className='nav-top-links d-flex w-100 justify-content-center'
                                    onClick={closeMobileMenu}
                                >
                                    <button type="button" class="btn btn-outline-light">
                                        Connect Wallet
                                    </button> &nbsp; OR &nbsp;
                                    <button type="button" class="btn btn-light">
                                        <i class="far fa-check-circle" /> Vote
                                    </button>
                                </span>

                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;