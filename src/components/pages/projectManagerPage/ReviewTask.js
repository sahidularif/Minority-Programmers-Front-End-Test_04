import React from 'react';
import '../../common/common.css';
import { FaAngleRight, FaPrint, FaShareAlt, FaCircle, FaBars, FaRegFlag, FaRegHourglass, FaPlayCircle, FaPlus, FaRegSmile, FaEnvelope, FaComment, FaAngleDown } from "react-icons/fa";
import taskUser from '../../../images/task-status-user-pic.png';
import laUser from '../../../images/task-status-header-LA.png';
import userIcon from '../../../images/task-status-user.png';
import eyeIcon from '../../../images/Group 6.png';


const ReviewTask = () => {
    const donecheck = `
    Checklist Point 1
    Checklist Point 2
    Checklist Point 3    
    `;
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

                    <div className="container-fluid proposal-container justify-content-center">
                        <div className="row d-flex pt-5 justify-content-center g-0">                           
                            <div className="col-md-10 m-3 bg-light p-3 add-task">
                                
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ReviewTask;