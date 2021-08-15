import React from 'react';
import ProposalProgress from './ProposalProgress';
import unaproved from '../../../images/unaproved.png';
import planned from '../../../images/planned.png';
import progress from '../../../images/progress.png';
import completed from '../../../images/completed.png';

const proposalVote = (props) => {
    return (
        <div className="row justify-content-center">
        <div className="col-md-11 proposal-box mb-5">
            <div className="row justify-content-center">
                <div className="col-md-12 justify-content-center m-3">
                    <div className="row justify-content-center align-items-center mt-3">
                        <div className="col-md-6">
                            <div className="proposl-title-category">
                                <h5><i class="far fa-check-circle" />{props.title}</h5>
                                <span><strong>Type:</strong> {props.type} <strong>Category: </strong>{props.category}</span>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="proposal-progress-bar">
                                        <div className="proposal-percent">
                                            <p className="proposal-bar-parcent" style={{ width: `${props.completedStatus}%` }}></p>
                                        </div>
                                        <div className="progress-icon">
                                            <div className="unaproved">
                                                <img src={unaproved} alt="" />
                                                <h6>Unaproved</h6>
                                            </div>
                                            <div className="planned">
                                                <img src={planned} alt="" />
                                                <h6>Planned</h6>
                                            </div>
                                            <div className="completed">
                                                <img src={progress} alt="" />
                                                <h6>Completed</h6>
                                            </div>
                                            <div className="completed">
                                                <img src={completed} alt="" />
                                                <h6>Completed</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row justify-content-center align-items-center text-center">
                                <div className="col-md-6 proposal-count-date">
                                    <div className="proposal-replies-view d-flex justify-content-center">
                                        <div className="replies">
                                            <h5>58</h5>
                                            <span>Replies</span>
                                        </div>
                                        <div className="views">
                                            <h5>74</h5>
                                            <span>Views</span>
                                        </div>
                                    </div>
                                    <div className="proposal-elect-date">
                                        <p>You <strong>Elected </strong>this proposal on <br />
                                            <span>20th May</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center align-items-center">
                                    <div className="">
                                        <button type="button" className="btn-view-proposal">View Proposal</button>
                                    </div>
                                    <div className="proposal-votes">
                                        <i class="fas fa-caret-up" style={{ cursor: 'pointer' }}></i>
                                        <span className="vote-count-num">{props.totalVotes}</span>
                                        <i class="fas fa-sort-down" style={{ cursor: 'pointer' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default proposalVote;