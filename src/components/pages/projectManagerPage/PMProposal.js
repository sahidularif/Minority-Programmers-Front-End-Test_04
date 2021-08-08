import React from 'react';
import '../../UserPage/Proposal.css';

const PMProposals = (props) => {
    const { type, catergory, replies, views } = props.proposal;
    console.log(type);
    return (
        <div className="container-fluid p-4">
            <div className="row justify-content-center align-items-center">
                <div className="col-10 d-flex border bg-light align-items-center rounded-3">
                    <div className="col-md-6 text-left proposal-title">

                        <h4>Proposal Title</h4>
                        <h5><strong>Type: </strong>{type}&nbsp;&nbsp;&nbsp;<strong>Category: </strong>{catergory}</h5>
                        <span className="proposal-activity d-flex m-3">
                            <span style={{ textAlign: 'center' }}>
                                <h5>{replies}</h5>
                                <p>Replies</p>
                            </span>
                            <span style={{ textAlign: 'center' }}>
                                <h5>{views}</h5>
                                <p>Views</p>
                            </span>
                        </span>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="col-md-10">
                            <p><button className="btn-view w-50">View Proposal</button></p>
                            <p><button className="btn-create w-50">Create Task</button></p>
                        </div>
                        <div className="sort col-md-2 d-block">
                            <p><i class="fas fa-caret-up"></i></p>
                            <p>267</p>
                            <p><i class="fas fa-sort-down"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PMProposals;