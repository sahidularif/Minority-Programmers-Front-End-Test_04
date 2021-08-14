import React, { useEffect, useState } from 'react';
import heroImage from '../../../images/modarator-proposal-hero-bg.png'
import mi from '../../../images/mod-icon.png';
import './Modarator.css';
import '../../common/common.css';
import data from '../../../fakedata/Data.json';
import ElectProposal from './ElectProposal';
import OtherProposal from './OtherProposal';
import PendingProposal from './PendingProposal';
import ApprovedProposal from './ApprovedProposal';
import RejectedProposal from './RejectedProposal';


const ProposalNotification = () => {
    const tasks = data[1].proposals.slice(0, 2);
    // const items = list.slice(0, size)
    return (
        <>

            <div className="container-fluid body-bg g-0">
                <div className="row justify-content-center mb-2">
                    <div className="col-md-12 mb-5 modrator-hero-section">
                        <div className="row d-flex pt-3 pb-3 justify-content-center align-items-center ">
                            <div className="col-md-6 justify-content-center align-items-center">
                                <img src={mi} alt="6" className="img-fluid" />
                                <div className="text-center text-light modarator-hero-title">
                                    <h1>Proposal Notifications</h1>
                                    <p>You have <span>5</span> new proposal notifications.</p>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <img src={heroImage} className="img-fluid align-self-center " alt="minority logo" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pending proposal for voted/revoted */}
                <div className="row justify-content-center">
                    <div className="col-md-10 notification-proposal-container">
                        <div className="notification-title">
                            <h2 className="proposal-notification-title">Proposals sent to be voted / revoted.</h2>
                            <p>The following proposals have been sent to be voted/ revoted by the core team.</p>
                        </div>
                        {
                            tasks.map((task, index) =>
                                <PendingProposal key={index} task={task} />
                            )
                        }
                    </div>
                </div>
                {/* Approved proposal */}
                <div className="row justify-content-center">
                    <div className="col-md-10 approved-proposal-container">
                    <div className="notification-title">
                            <h2 className="proposal-notification-title">Proposals approved by core team.</h2>
                            <p>The following proposals you elected, were approved by the core team.</p>
                        </div>
                        {
                            tasks.map((task, index) =>
                                <ApprovedProposal key={index} task={task} />
                            )
                        }
                    </div>
                </div>
                {/* Rejected proposal */}
                <div className="row justify-content-center">
                    <div className="col-md-10 rejected-proposal-container">
                    <div className="notification-title">
                            <h2 className="proposal-notification-title">Proposals rejected by core team.</h2>
                            <p>The following proposals you elected, were rejected by the core team.</p>
                        </div>
                        {
                            tasks.map((task, index) =>
                                <RejectedProposal key={index} task={task} />
                            )
                        }
                    </div>
                </div>

            </div>
        </>
    );
};

export default ProposalNotification;