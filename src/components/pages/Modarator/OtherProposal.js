import React from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import userPic from '../../../images/task-user.png';
import './Modarator.css';

const OtherProposal = (props) => {
    const {description} = props.task;
    return (
        <div className="row g-0">
            <div className="col-md-12">
                <div className="row justify-content-center">
                    <div className="col-md-11 elect-proposal-box justify-content-center align-items-center">
                        <div className="elect-proposal-title justify-content-center">
                            <h4>Proposal Title</h4>
                            <h6><strong>Type:</strong> Enhancement <strong>Category: </strong> Incubator</h6>
                        </div>
                        <div className="proposal-user-details">
                            <div className="user-details-prospol">
                                <img src={userPic} alt="" srcset="" />
                                <div className="username align-items-center">
                                    <span>Created by</span>
                                    <h5>User Name</h5>
                                </div>
                                <div className="created-date-proposal">
                                    <span>Created on</span>
                                    <h5>22 May</h5>
                                </div>
                            </div>
                            <div className="proposal-details">
                                <div className="replies">
                                    <span>58</span>
                                    <h6>Replies</h6>
                                </div>
                                <div className="views">
                                    <span>74</span>
                                    <h6>Views</h6>
                                </div>
                                <div className="proposal-votes">
                                    <i class="fas fa-caret-up"></i>
                                    <span className="vote-count-num">274</span>
                                    <i class="fas fa-sort-down"></i>
                                </div>
                            </div>
                        </div>
                        <div className="row proposal-text-btn">
                            <div className="col-md-9 proposal-text">
                                <p>
                                    {description}
                                </p>
                            </div>
                            <div className="col-md-3 proposal-btn">
                                <button type="button" className="btn-view">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherProposal;