import React from 'react';
import ProposalProgress from './ProposalProgress';
import './Proposal.css';
import './ProposalProgress.css';
import unaproved from '../../images/unaproved.png';
import planned from '../../images/planned.png';
import progress from '../../images/progress.png';
import completed from '../../images/completed.png';

const Proposals = (props) => {
    return (
        <div className="container-fluid p-4 mb-2">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 d-flex border bg-light align-items-center rounded-3">
                    <div className="col-md-4 text-left">

                        <h4><i class="far fa-check-circle" />&nbsp; {props.title}</h4>
                        <p><strong>Type: </strong>{props.type}&nbsp;&nbsp;&nbsp;<strong>Category: </strong>{props.category}</p>
                        <div className="proposal-progress">
                            <div className="proposal-parcent">
                                <p className="proposal-pecent_color" style={{width:`${props.completed}%`}}></p>
                            </div>
                            <div className="proposal-progress-icon">
                                <div className="unaproved">
                                    <img src={unaproved} alt="" />
                                    <h6>Unaproved</h6>
                                </div>
                                <div className="unaproved">
                                    <img src={planned} alt="" />
                                    <h6>Planned</h6>
                                </div>
                                <div className="unaproved">
                                    <img src={progress} alt="" />
                                    <h6>Progress</h6>
                                </div>
                                <div className="unaproved">
                                    <img src={completed} alt="" />
                                    <h6>Completed</h6>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-3 align-items-center" style={{ marginLeft: '30px' }}>
                        <span className="proposal-activity d-flex m-3">
                            <span>
                                <h6>{props.replies}</h6>
                                <p>Replies</p>
                            </span>
                            <span>
                                <h6>{props.views}</h6>
                                <p>Views</p>
                            </span>
                            <span>
                                <h6>0</h6>
                                <p>$ Min. Earned</p>
                            </span>
                        </span>
                        <span className="proposal-date d-flex m-3">
                            <span>
                                <h6>You<b> Created</b> this proposal on<br /> <span>{props.createdDate}</span></h6>
                            </span>
                        </span>
                    </div>
                    <div className="col-md-4 mt-3 d-flex justify-content-center align-items-center">
                        <div className="col-md-10">
                            <p><button className="btn btn-outline-primary w-75">View Proposal</button></p>
                            <p><button className="btn btn-primary w-75">Claim $ Minority</button></p>
                        </div>
                        <div className="sort col-md-2 d-block">
                            <p><i class="fas fa-caret-up"></i></p>
                            <p>{props.totalVotes}</p>
                            <p><i class="fas fa-sort-down"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proposals;