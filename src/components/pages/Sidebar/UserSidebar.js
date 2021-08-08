import React from 'react';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';
import userPic from '../../../images/shotThumbnail.png';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="container-fluid sidebar-container g-0">
            <div className="row text-center">
                <div className="col-md-12 w-100 user-profile">
                    <div className="d-flex align-items-center justify-content-center profile">
                        <img src={userPic} className="img-fluid" alt="" />
                        <p>Hello, Shot</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center home">
                        <p>Home</p>
                    </div>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed text-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Governance
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse text-dark" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body user-rol">
                                    <ol class="list-group text-sm-start">
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto text-sm-start">
                                                <div class="fw-bold text-sm-start fs-6">Vote & Win Insights</div>
                                            </div>
                                            <span class="badge bg-primary rounded-pill">14</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <Link to="/myProposal"><div class="fw-bold">My Proposals</div></Link>
                                            </div>
                                            <span class="badge bg-primary rounded-pill">14</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">All Proposals</div>
                                            </div>
                                            <span class="badge bg-primary rounded-pill">14</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Check $MPA to Vote</div>
                                            </div>
                                            <span class="badge bg-primary rounded-pill">14</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Create Proposal</div>
                                            </div>
                                            <span class="badge bg-primary rounded-pill">14</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Convert $ Minority to $MPA</div>
                                            </div>
                                            <span class="badge bg-primary rounded-pill">14</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;