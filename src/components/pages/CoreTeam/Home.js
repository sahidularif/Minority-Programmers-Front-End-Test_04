import React, { useEffect, useState } from 'react';
import heroImage from '../../../images/modarator-proposal-hero-bg.png'
import cT from '../../../images/core-team-icon.png';
import '../Modarator/Modarator.css';
import '../../common/common.css';
import data from '../../../fakedata/Data.json';
import VotedProposal from './VotedProposal';
import ApprovedProposal from './ApprovedProposal';
import RejectedProposal from './RejectedProposal';
import TaskCard from '../../common/TaskCard';


const Home = () => {
    const proposals = data[1].proposals;
    const tasks = data[0].tasks;
    const votedProposal = (proposals.filter(rejected => rejected.approvedStatus == null)).slice(0, 3);
    const approvedProposal = (proposals.filter(rejected => rejected.approvedStatus == true)).slice(0, 2);
    const rejectedProposal = proposals.filter(rejected => rejected.approvedStatus == false);
    const revisionTask = tasks.slice(0, 4);
    const completedTask = tasks.slice(0, 3);
    return (
        <>

            <div className="container-fluid body-bg g-0">
                <div className="row justify-content-center mb-2">
                    <div className="col-md-12 bg-black mb-5">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6 view-task-header justify-content-center">
                                <img src={cT} alt="" className="img-fluid" />
                                <div className="text-center text-light notification-subtitle">
                                    <h1>Notifications</h1>
                                    <h4>You have <span>13</span> new notifications</h4>
                                </div>
                            </div>
                            <div className="col-md-5 d-flex align-items-center justify-content-center">
                                <img src={heroImage} className="img-fluid align-self-center " alt="minority logo" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* New Notification */}
                <div className="row justify-content-center mb-5">
                    <div className="col-md-8 new-notification-header ">
                        <div className="new-notification-title">
                            <h2>New</h2>
                            <p></p>
                        </div>

                    </div>
                </div>

                {/* Voted proposal */}
                <div className="row justify-content-center">
                    <div className="col-md-10 elect-proposal-container">
                        <div className="notification-title">
                            <h2 className="proposal-notification-title">Proposals to be voted / revoted.</h2>
                            <p>Please Approve or disapprove proposals.</p>
                        </div>
                        {
                            votedProposal.map((task, index) =>
                                <VotedProposal key={index} task={task} />
                            )
                        }
                    </div>
                </div>
                {/* Approved proposal */}
                <div className="row justify-content-center">
                    <div className="col-md-10 approved-proposal-container">
                        <div className="notification-title">
                            <h2 className="proposal-notification-title">approved Proposals.</h2>
                            <p>The following proposals you voted got approved.</p>
                        </div>
                        {
                            approvedProposal.map((task, index) =>
                                <ApprovedProposal key={index} task={task} />
                            )
                        }
                    </div>
                </div>
                {/* Rejected proposal*/}
                <div className="row justify-content-center">
                    <div className="col-md-10 rejected-proposal-container">
                        <div className="notification-title">
                            <h2 className="proposal-notification-title">rejected Proposals.</h2>
                            <p>The following proposals you voted got rejected.</p>
                        </div>
                        {
                            rejectedProposal.map((task, index) =>
                                <RejectedProposal key={index} task={task} />
                            )
                        }
                    </div>
                </div>
                {/* Task */}
                <div className="row root-bg">
                    <div className="col-md-12 ">
                        <div className="row d-flex justify-content-around align-items-start p-5">

                            <div className="col-md-5 planned-task mb-5">
                                <div className="row">
                                    <div className="col-md-12 planned-title">
                                        <h4><i style={{ color: '#FFC700' }} class="far fa-check-circle" /> Planned Tasks</h4>
                                    </div>
                                </div>
                                <div className="row d-flex">
                                    {
                                        revisionTask.map((task, index) =>
                                            <TaskCard task={task} key={index} />
                                        )
                                    }
                                </div>
                            </div>

                            <div className="col-md-5 planned-task">
                                <div className="row">
                                    <div className="col-md-12 planned-title">
                                        <h4><i style={{ color: '#FFC700' }} class="far fa-check-circle" /> In Review Tasks</h4>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center justify-content-center">
                                    {
                                        completedTask.map((task, index) =>
                                            <TaskCard task={task} key={index} />
                                        )
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* New Notification */}
                <div className="row justify-content-center mb-5">
                    <div className="col-md-8 new-notification-header ">
                        <div className="new-notification-title">
                            <h2>Earlier</h2>
                            <p></p>
                        </div>

                    </div>
                </div>
                 {/* Earlier Rejected proposal*/}
                 <div className="row justify-content-center">
                    <div className="col-md-10 rejected-proposal-container">
                        <div className="notification-title">
                            <h2 className="proposal-notification-title">rejected Proposals.</h2>
                            <p>The following proposals you voted got rejected.</p>
                        </div>
                        {
                            rejectedProposal.map((task, index) =>
                                <RejectedProposal key={index} task={task} />
                            )
                        }
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;