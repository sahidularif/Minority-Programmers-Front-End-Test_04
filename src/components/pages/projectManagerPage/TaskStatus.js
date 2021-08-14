import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../common/common.css';
import { FaAngleRight, FaPrint, FaShareAlt, FaCircle, FaBars, FaRegFlag, FaRegHourglass, FaPlayCircle, FaPlus, FaRegSmile, FaEnvelope, FaComment, FaAngleDown } from "react-icons/fa";
import taskUser from '../../../images/task-status-user-pic.png';
import laUser from '../../../images/task-status-header-LA.png';
import userIcon from '../../../images/task-status-user.png';
import eyeIcon from '../../../images/Group 6.png';
const TaskStatus = () => {
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
                                {/*  */}
                                <div className="col-md-10 m-3 bg-light p-3 add-task">
                                    <div className="row">
                                        <div className="ttask--header">
                                            <div className="task-header-top">
                                                <div className="task-header-breadcrumb">
                                                    <span className="task-breadcrumb">In<b>Category</b><FaAngleRight /><b>Sub Category</b></span>
                                                    <span className="task-header-user-icon">
                                                        <span>For</span>
                                                        <img src={taskUser} alt="" />
                                                        <img src={laUser} alt="" />
                                                        <img src={userIcon} alt="" />
                                                    </span>
                                                </div>
                                                <div className="print--share">
                                                    <FaPrint />
                                                    <FaShareAlt />
                                                </div>
                                            </div>
                                            <div className="task-title-name">
                                                <FaCircle className="fa-circle" />
                                                <h3>Task Name Here</h3>
                                            </div>
                                            <div className="task--sub--all_details">
                                                <div className="task--sub__cat__feature">
                                                    <span className="task--sub__design">Design</span>
                                                    <span className="task--sub__feature">Feature</span>
                                                    <span className="task--sub__icon">
                                                        <FaBars />
                                                    </span>
                                                    <span className="task--sub__icon">
                                                        <FaRegHourglass />
                                                    </span>
                                                    <span className="task--sub__icon">
                                                        <FaRegFlag />
                                                    </span>
                                                </div>
                                                <div className="task--sub--date__properties">
                                                    <div className="task--sub__created">
                                                        <span>Created</span>
                                                        <h4>Jun 11th, 3:00 pm</h4>
                                                    </div>
                                                    <div className="task--sub__created">
                                                        <span>Time Tracked</span>
                                                        <h4><FaPlayCircle className="fa-play" />0:00:00</h4>
                                                    </div>
                                                    <div className="task--sub__created">
                                                        <span>Estimate</span>
                                                        <h4><FaRegHourglass className="fa-hour" />15h</h4>
                                                    </div>
                                                    <div className="task--sub__created">
                                                        <span>Start date</span>
                                                        <h4>Jun 12</h4>
                                                    </div>
                                                    <div className="task--sub__created">
                                                        <span>Due date</span>
                                                        <h4 className="purple">Jun 15</h4>
                                                    </div>
                                                    <img src={eyeIcon} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center align-items-center">
                                        <div className="col-md-12 ">
                                            <div className="row d-flex">
                                                <div className="col-md-6">
                                                    <div className="task-description-input">
                                                        <h5>Task Description</h5>
                                                        <textarea name="" id="" cols="0" rows="10" placeholder="Task Description here"></textarea>
                                                        <button className="btn-show-more">Show more</button>
                                                        <button className="btn-add-attachment">
                                                            <span>Add atachment</span>
                                                            <FaAngleDown />
                                                        </button>
                                                    </div>
                                                    <div className="task-description-add-substack">
                                                        <h5><span><FaPlus /></span> Add Subtask</h5>
                                                        <div className="task--sub--input">
                                                            <textarea name="" id="" cols="50" rows="5" placeholder="Sub Task description here"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="task-description-input">
                                                        <h5>Definition Of Done Checklist</h5>
                                                        <textarea name="" id="" cols="0" rows="15" defaultValue={donecheck} placeholder="Task Description here"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr style={{ border: '1px solid dark' }} />
                                            {/*  */}
                                            <div className="row d-flex">
                                                <div className="col-md-6">
                                                    <div className="task-description-input">
                                                        <h5>Task Status Updates</h5>
                                                        <textarea name="" id="" cols="0" rows="6" placeholder="Lorem created this task"></textarea>

                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="task-description-input">
                                                        <h5>Add Comments Or Email</h5>
                                                        <textarea name="" id="" cols="0" rows="4" placeholder="Type Your Comments Here"></textarea>
                                                    </div>
                                                    <div className="add--comment">
                                                        <div className="comment--icons__sare justify-content-between">
                                                        <i className="fas fa-paperclip"></i>
                                                            <FaRegSmile className="fa-smile" />
                                                        </div>
                                                        <div className="comment--icons__sare">
                                                            <FaComment className="fa-comment" />
                                                            <FaEnvelope className="fa-message" />
                                                            <button className="btn btn-outline-primary">Comment</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TaskStatus;