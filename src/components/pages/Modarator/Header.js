import React, { useState } from 'react'
import '../../common/SideNav.css';
import Sidebar from './Sidebar';
import Navbar from '../homePage/Navbar';
const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    if (sidebar) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <section id="header">
            <Navbar
                toggleSidebar={toggleSidebar}
            />
            <Sidebar
                sidebar={sidebar}
                toggleSidebar={toggleSidebar}
            />
        </section>
    )
}

export default Header