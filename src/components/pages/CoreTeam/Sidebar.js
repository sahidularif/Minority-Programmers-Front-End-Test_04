import React from 'react';
import '../../common/SideNav.css';
import userPIc from '../../../images/user-pic.png';
import { Link } from 'react-router-dom';

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
                            <Link to="/navbar">Home</Link>
                        </div>
                        <div className="sidebar-title">
                            <Link to="/navbar">Governance</Link>
                        </div>

                        <ul className="sidebar-links">

                            <li><Link to="/core-team/view-tasks" className="linkd-list">View Tasks</Link></li>
                            <li><Link to="/core-team" className="linkd-list">Notifications</Link></li>
                            <li><Link to="/modarator/task-status-notification" className="linkd-list">Create Proposals</Link></li>
                            <li><Link to="/manager/View-task" className="linkd-list">My Create Proposals</Link></li>
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