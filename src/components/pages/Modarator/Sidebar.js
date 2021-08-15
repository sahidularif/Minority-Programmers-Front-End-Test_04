import React from 'react';
import '../../common/SideNav.css';
import userPIc from '../../../images/user-pic.png';
import { Link } from 'react-router-dom';
import sideIcon1 from '../../../images/mod-icon.png';
import sideIcon2 from '../../../images/side-user.png';

const Sidebar = ({ sidebar, toggleSidebar }) => {
    return (
        <>
            {sidebar && (
                <section id="sidebar">
                    <div className="overlay" onClick={toggleSidebar}></div>
                    <div className="sidebar">
                        <div className="user-profile">
                            <img src={userPIc} alt="user" />
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

                            <li>All Proposals</li>
                            <li><Link to="/modarator" className="linkd-list">Elect Proposals</Link></li>
                            <li><Link to="/modarator/my-elected-proposal" className="linkd-list">My Elected Proposals</Link></li>
                            <li><Link to="/modarator/task-status-notification" className="linkd-list">Task status Notifications</Link></li>
                            <li><Link to="/modarator/proposal-notification" className="linkd-list">Proposal Notifications</Link></li>
                            <li><Link to="/manager/View-task" className="linkd-list">Create Proposals</Link></li>
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