import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from '../../../images/Illustration.png'
import pm from '../../../images/Group 1157.png';
import taskUser from '../../../images/task-user.png';
import '../../common/common.css';
import PMSidebar from '../Sidebar/PMSidebar';
import taskData from '../../../fakedata/userTaskData';
import Navbar from '../../common/Navbar';
import Card from './Card';
import data from '../../../fakedata/Data.json';
const ViewTask = () => {
    const tasks = data[0].tasks
    return (
        <>
            <div className="container-fluid g-0">
                <div classNam="row">
                    <Navbar />
                </div>
            </div>
            <div className="container-fluid g-0 body-bg">
                <div className="row">
                    {/* <div className="col-md-2 g-0">
                        <PMSidebar></PMSidebar>
                    </div> */}
                    <div className="col-md-12 bg-light g-0 justify-content-center">
                        <div className="container-fluid bg-black">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-md-6 view-task-header">
                                    <img src={pm} alt="" className="img-fluid" />
                                    <div className="text-center text-light">
                                        <h1>View Tasks</h1>
                                        <h4>View, organize and access your tasks here.</h4>
                                    </div>
                                </div>
                                <div className="col-md-5 d-flex align-items-center ">
                                    <img src={heroImage} className="img-fluid align-self-center " alt="minority logo" />
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid proposal-container">
                            <div className="row d-flex justify-content-center align-items-center g-0">
                                {/*  */}
                                <div className="col-md-4 planned-task p-1">
                                    <div className="planned-title w-100">
                                        <h4><i style={{ color: '#FFC700' }} class="far fa-check-circle" /> Planned Tasks</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 d-flex justify-content-between">
                                            <div className="row">
                                                {
                                                    tasks.map((task, index) =>
                                                        <div className="col-md-6 mb-2" key={index}>
                                                            <div class="root d-flex">
                                                                <div class="content d-flex">
                                                                    <div className="d-flex justify-content-between">
                                                                        <h6 className="text-right">{task.description}</h6>
                                                                        <img src={taskUser} alt="" style={{ height: '50px', width: '50px' }} className="img-fluid rounded-circle" />
                                                                    </div>
                                                                    <div className="d-flex justify-content-between">
                                                                        <p><i class="fas fa-flag"></i> {task.createdDate}</p>
                                                                    </div>
                                                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                                                    <div>
                                                                            <p>
                                                                                <button type="button" class="btn-tag">
                                                                                    {task.type[0]}
                                                                                </button>
                                                                            </p>
                                                                            <p>
                                                                                <button type="button" class="btn-tag2">
                                                                                    {task.type[1]}
                                                                                </button>
                                                                            </p>
                                                                        </div>
                                                                        <div className="d-flex more-option">
                                                                            <span>More Options <i class="fas fa-ellipsis-v"></i></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* planned task 2*/}
                                <div className="col-md-4 planned-task p-1">
                                    <div className="planned-title w-100">
                                        <h4><i style={{ color: '#FFC700' }} class="far fa-check-circle" /> Ready For Review Tasks</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 d-flex justify-content-between">
                                            <div className="row">
                                                {
                                                    tasks.map((task, index) =>
                                                        <div className="col-md-6 mb-2" key={index}>
                                                            <div class="root d-flex">
                                                                <div class="content d-flex">
                                                                    <div className="d-flex justify-content-between">
                                                                        <h6 className="text-right">{task.description}</h6>
                                                                        <img src={taskUser} alt="" style={{ height: '50px', width: '50px' }} className="img-fluid rounded-circle" />
                                                                    </div>

                                                                    <div className="d-flex justify-content-between">
                                                                        <p><i class="fas fa-flag"></i> May 27</p>
                                                                    </div>
                                                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                                                    <div>
                                                                            <p>
                                                                                <button type="button" class="btn-tag">
                                                                                    {task.type[0]}
                                                                                </button>
                                                                            </p>
                                                                            <p>
                                                                                <button type="button" class="btn-tag2">
                                                                                    {task.type[1]}
                                                                                </button>
                                                                            </p>
                                                                        </div>
                                                                        <div className="d-flex more-option">
                                                                            <span>More Options <i class="fas fa-ellipsis-v"></i></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* pllaned task 3 */}
                                <div className="col-md-4 planned-task p-1">
                                    <div className="planned-title w-100">
                                        <h4><i style={{ color: '#FFC700' }} class="far fa-check-circle" /> Completed Tasks</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 d-flex justify-content-between">
                                            <div className="row">
                                                {
                                                    taskData.map((data, index) =>
                                                        <div className="col-md-6 mb-2" key={index}>
                                                            <div class="root d-flex">
                                                                <div class="content d-flex">
                                                                    <div className="d-flex justify-content-between">
                                                                        <h6 className="text-right">{data.description}</h6>
                                                                        <img src={taskUser} alt="" style={{ height: '50px', width: '50px' }} className="img-fluid rounded-circle" />
                                                                    </div>

                                                                    <div className="d-flex justify-content-between">
                                                                        <p><i class="fas fa-flag"></i> May 27</p>
                                                                    </div>
                                                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                                                        <div>
                                                                            <p>
                                                                                <button type="button" class="btn-tag">
                                                                                    {data.type[0]}
                                                                                </button>
                                                                            </p>
                                                                            <p>
                                                                                <button type="button" class="btn-tag2">
                                                                                    {data.type[1]}
                                                                                </button>
                                                                            </p>
                                                                        </div>
                                                                        <div className="d-flex more-option">
                                                                            <span>More Options <i class="fas fa-ellipsis-v"></i></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
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

export default ViewTask;