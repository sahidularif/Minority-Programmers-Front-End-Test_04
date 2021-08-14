import React from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import userPic from '../../../images/task-user.png';
import '../Modarator/Modarator.css';

const ApprovedProposal = (props) => {

    const { title, description, type, category, createdBy, createdDate, replies, totalVotes, views, availblDayToLeft } = props.task;

    return (
        <div className="row g-0">
            <div className="col-md-12">
                <div className="row justify-content-center">
                    <div className="col-md-11 elect-proposal-box justify-content-center align-items-center">
                        <div className="proposal-notification-title">
                            <div className="proposal-title-type-cate">
                                <h4>{title}</h4>
                                <h6><strong>Type:</strong> {type} <strong>Category: </strong> {category}</h6>
                            </div>
                            <div className="days-to-left">
                                <h3><i class="fas fa-check-circle"></i> Approved</h3>
                            </div>
                        </div>

                        <div className="proposal-user-details">
                            <div className="user-details-prospol">
                                <img src={userPic} alt="" srcset="" />
                                <div className="username align-items-center">
                                    <span>Created by</span>
                                    <h5>{createdBy}</h5>
                                </div>
                                <div className="created-date-proposal">
                                    <span>Created on</span>
                                    <h5>{createdDate}</h5>
                                </div>
                            </div>
                            <div className="proposal-details align-items-center">
                                <div className="replies">
                                    <span>{replies}</span>
                                    <h6>Replies</h6>
                                </div>
                                <div className="views">
                                    <span>{views}</span>
                                    <h6>Views</h6>
                                </div>
                                <div className="proposal-votes">
                                    <i class="fas fa-caret-up"></i>
                                    <span className="vote-count-num">{totalVotes}</span>
                                    <i class="fas fa-sort-down"></i>
                                </div>
                            </div>
                        </div>
                        <div className="row proposal-text-btn justify-content-between">
                            <div className="col-md-9 proposal-text">
                                <p>
                                    {description}
                                </p>
                            </div>
                            <div className="col-md-3 proposal-btn">
                                <button type="button" className="btn-elect">View Proposal</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApprovedProposal;