import React, { useEffect, useState } from 'react';
import '../../common/common.css';
import pmProposal from '../../../fakedata/pmProposal';
import taskUser from '../../../images/task-user.png';
import group1 from '../../../images/Group 1.png';
import group2 from '../../../images/Group 2.png';
import group3 from '../../../images/Group 3.png';
import group4 from '../../../images/Group 4.png';
import group5 from '../../../images/Group 5.png';
import group6 from '../../../images/Group 6.png';
const CreateTask = () => {
    const [proposalData, setProposalData] = useState([]);
    useEffect(() => {
        setProposalData(pmProposal);
    }, []);
    console.log(proposalData)
    return (
        <>
            <div className="container-fluid g-0 body-bg root-bg">
                <div className="row root-bg">
                    <div className="col-md-12 bg-light g-0">
                        <div className="row d-flex pt-5 justify-content-center align-items-center task-container task-bg g-0">
                            <div className="col-md-10 align-items-center task-proposal">
                                <div className="task">
                                    <div className="task-title w-100">
                                        <h4>Proposal Title</h4>
                                        <p><strong>Type: </strong>Enhancement&nbsp;&nbsp;&nbsp;<strong>Category: </strong>Incubator</p>
                                    </div>
                                    <div className="task-user w-100 justify-content-between">
                                        <div className="col-md-3 task-cont d-flex">
                                            <img src={taskUser} className="" alt="" />
                                            <p>
                                                <p><span>Created by</span><br /> User name</p>
                                            </p>&nbsp;&nbsp;
                                            <p>
                                                <p><span>Created on</span><br /> Mar 25</p>
                                            </p>
                                        </div>
                                        <div className="col-md-3 task-cont d-flex align-items-center justify-content-evenly">

                                            <p className="task-count">
                                                <p>58<br /> <span>Replies</span></p>
                                            </p>&nbsp;&nbsp;
                                            <p className="task-count">
                                                <p>74<br /> <span>Views</span></p>
                                            </p>
                                            <p className="task-count">
                                                <p><i class="fas fa-caret-up"></i></p>
                                                <p><span>267</span></p>
                                                <p><i class="fas fa-sort-down"></i></p>
                                            </p>

                                        </div>
                                    </div>
                                    <div className="task-title d-flex p-3">
                                        <div className="col-md-10">
                                            <span>Details about proposal - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare ullamcorper tellus, vel euismod odio posuere ut. Quisque quis lacinia tortor. Donec auctor consectetur nibh, eu varius mi porta nec. Quisque ultricies odio vitae nibh malesuada tristique vel sed leo. Donec egestas, urna eu auctor ultricies, massa lorem pellentesque quam, vitae congue urna quam ultricies ex.</span>
                                        </div>
                                        <div className="col-md-2">
                                            <span><button className="btn btn-primary ">Read more</button></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid proposal-container justify-content-center align-items-center">
                            <div className="row d-flex pt-5 justify-content-center align-items-center g-0">
                                <div className="col-md-10 m-3  bg-light p-3 add-task">
                                    <div className="row">
                                        <h4>TYPE TASK NAME HERE</h4>
                                        <div className="col-md-10 d-flex">

                                            <div className="col-md-6 text-light icons">
                                                <div>
                                                    <span><img src={group1} alt="" /></span>
                                                    <span><img src={group2} alt="" /></span>
                                                    <span><img src={group3} alt="" /></span>
                                                    <span><img src={group4} alt="" /></span>
                                                    <span><img src={group5} alt="" /></span>
                                                    <span><img src={group6} alt="" /></span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex">
                                                <div class="input-group mb-3 text-center align-items-center">
                                                    <span>In &nbsp;&nbsp;</span>
                                                    <span class="input-group-text" id="basic-addon1">Search</span>
                                                    <input type="text" class="form-control" placeholder="Search List" aria-label="Username" aria-describedby="basic-addon1" />
                                                    &nbsp;&nbsp;For &nbsp;&nbsp;<button type="button" style={{ height: '50px', width: '50px', fontSize: '20px' }} class=" btn-outline-primary border rounded-circle">
                                                        <i class="fas fa-user-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="">
                                            <div class="form-floating">
                                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '120px' }}></textarea>
                                                <label for="floatingTextarea">Type task description here</label>
                                            </div>
                                            <div className="d-flex justify-content-between mt-2">
                                                <p>
                                                    <button type="button" style={{ height: '30px', width: '30px', fontSize: '20px' }} class="btn-add-sub">
                                                        +
                                                    </button> &nbsp;Add Subtask
                                                </p>
                                                <p>
                                                    <strong>Add Definition of done Checklist</strong> &nbsp;&nbsp;
                                                    <button type="button" style={{ height: '30px', width: '30px', fontSize: '20px' }} class="btn-add-sub">
                                                        +
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="dropdown">
                                            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Add attachment
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                        <div className="row align-items-end justify-content-end">
                                            <div className="col-md-2  align-items-end justify-content-end">
                                                <button type="button" class="btn-create-task">
                                                    Create Task
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row justify-content-center body-bg">
                                <div className="col-md-9 proposal-status mb-3">
                                    <div className="p-5">
                                        <h2>Change status of proposal</h2>
                                        <p>Notify users that the proposal moved to planned stage, once task has been created and assigned.</p>
                                        <button type="button" class="btn-planned">
                                            Planned
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateTask;