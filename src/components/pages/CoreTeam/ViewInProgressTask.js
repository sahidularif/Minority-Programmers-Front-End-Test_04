import React, { useEffect, useState } from 'react';
import { FaTags, FaFlag, FaAngleRight, FaPrint, FaShareAlt, FaCircle, FaBars, FaRegFlag, FaRegHourglass, FaPlayCircle, FaPlus, FaRegSmile, FaEnvelope, FaComment, FaAngleDown, FaStream } from "react-icons/fa";
import heroImage from '../../../images/Illustration.png';
import modIcon from '../../../images/mod-icon.png';
import '../../common/common.css';
import '../Modarator/Modarator.css';
import data from '../../../fakedata/Data.json';
import taskUser from '../../../images/task-status-user-pic.png';
import laUser from '../../../images/user-la.png';
import userIcon from '../../../images/task-status-user.png';
import eyeIcon from '../../../images/Group 6.png';


const ViewInProgressTask = () => {
    const plannedTask = data[0].tasks.slice(0, 6);
    const reviewTask = data[0].tasks.slice(0, 5);
    const completedTask = data[0].tasks.slice(0, 4);
    const donecheck = `
    Checklist Point 1
    Checklist Point 3    
    `;
    return (
        <>

            <div className="container-fluid body-bg">
                <div className="container-fluid proposal-container justify-content-center">
                    <div className="row d-flex pt-5 justify-content-center g-0">
                        {/*  */}
                        <div className="col-md-10 m-3 bg-light p-3">
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
                                                <FaTags />
                                            </span>
                                            <span className="task--sub__icon">
                                                <FaStream />
                                            </span>
                                            <span className="task--sub__icon">
                                                <FaFlag />
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
                <div className="row justify-content-center">
                    <div className="col-md-9 move-to-progress">
                        <h2>MOVE TASK TO READY FOR REVIEW</h2>
                        <p>Notify project manager that the task is done.</p>
                        <button type="button" className="btn-move-to-reviw">Ready For Review</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewInProgressTask;