import React from 'react';
import ProposalProgress from './ProposalProgress';

const proposalVote = () => {
    return (
        <div>
            <div className="container-fluid p-4 mb-3">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 d-flex border bg-light align-items-center rounded-3">
                    <div className="col-md-4 text-left">

                        <h4><i class="far fa-check-circle" />&nbsp; Proposal Title</h4>
                        <p><strong>Type: </strong>Enhancement&nbsp;&nbsp;&nbsp;<strong>Category: </strong>Incubator</p>
                        <ProposalProgress />

                    </div>
                    <div className="col-md-3 align-items-center" style={{ marginLeft: '30px' }}>
                        <span className="proposal-activity d-flex m-3">
                            <span>
                                <h6>58</h6>
                                <p>Replies</p>
                            </span>
                            <span>
                                <h6>74</h6>
                                <p>Views</p>
                            </span>
                            <span>
                                <h6>0</h6>
                                <p>$ Min. Earned</p>
                            </span>
                        </span>
                        <span className="proposal-date d-flex m-3">
                            <span>
                                <h6>You<b> Created</b> this proposal on<br /> <span>20th May</span></h6>
                            </span>
                        </span>
                    </div>
                    <div className="col-md-4 mt-3 d-flex justify-content-center align-items-center">
                        <div className="col-md-10">
                            <p><button className="btn btn-primary w-75">Claim $ Minority</button></p>
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
        </div>
    );
};

export default proposalVote;