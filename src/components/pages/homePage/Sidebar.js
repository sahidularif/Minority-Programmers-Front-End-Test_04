import React from 'react';
import '../../common/SideNav.css';
import userPhoto from '../../../images/task-user.png'
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebar, toggleSidebar }) => {
    return (
        <>
            {sidebar && (
                <section id="sidebar">
                    <div className="overlay" onClick={toggleSidebar}></div>
                    <div className="sidebar">
                        <div className="user-profile">
                            <img src={userPhoto} alt="user" />
                            <h3 className="user-name">Hello, <span>Shot</span></h3>
                        </div>
                        <div className="home-link">
                            <Link to="/navbar">Home</Link>
                        </div>
                        <div className="sidebar-title">
                            <Link to="/navbar">Governance</Link>
                        </div>
                       
                            <ul className="sidebar-links">

                                <li>Vote & win insight</li>
                                <li className="active">My porposals</li>
                                <li>All porposals</li>
                                <li>Check $MPA to Vote</li>
                                <li>Create porposals</li>
                                <li>Conver $ minority to $MPA</li>

                            </ul>
                        
                    </div>
                </section>
            )}
        </>

    )
}

export default Sidebar