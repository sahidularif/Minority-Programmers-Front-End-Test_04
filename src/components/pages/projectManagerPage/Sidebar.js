import React from 'react';
import '../../common/SideNav.css';
import userPhoto from '../../../images/task-user.png';
import { Link } from 'react-router-dom';
import sideIcon1 from '../../../images/Group 1157.png';
import sideIcon2 from '../../../images/side-user.png';
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
                            <Link to="/">Home</Link>
                        </div>
                        <div className="sidebar-title">
                            <Link to="/">Governance</Link>
                        </div>
                        <div className="side-user d-flex">
                            <p>Roles</p>
                            <span className="d-flex justify-content-between">
                                <img src={sideIcon1} alt="user" />
                                <img src={sideIcon2} alt="user" />
                            </span>
                        </div>

                        <ul className="sidebar-links">

                            <li>Approved Proposals</li>
                            <li className="active">Check task status</li>
                            <li><Link to="/manager/task-notification" className="linkd-list">Task Notifications</Link></li>
                            <li><Link to="/manager/planned-task-status" className="linkd-list">Task Status</Link></li>
                            <li><Link to="/manager/create-task" className="linkd-list">Create Proposals</Link></li>
                            <li><Link to="/manager/View-task" className="linkd-list">View Task</Link></li>
                            <li>My Created Proposals</li>
                            <li>Vote & Win Insights</li>
                            <li>All Proposals</li>
                            <li>My Vote Points</li>
                            <li>Check $MPA to Vote</li>
                            <li>Convert $ Minority to $MPA</li>

                        </ul>

                    </div>
                </section>
            )}
        </>

    )
}

export default Sidebar