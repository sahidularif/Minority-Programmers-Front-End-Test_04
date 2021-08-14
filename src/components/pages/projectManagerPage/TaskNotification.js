import React, { useEffect, useState } from 'react';
import heroImage from '../../../images/Illustration.png'
import pm from '../../../images/Group 1157.png';
import taskUser from '../../../images/task-user.png';
import '../../common/common.css';
import './Notification.css';
import data from '../../../fakedata/Data.json';
import TaskCard from '../../common/TaskCard';

const TaskNotification = () => {
    const tasks = data[0].tasks
    return (
        <>

            <div className="container-fluid body-bg">
                <div className="row justify-content-center mb-2">
                    <div className="col-md-12 bg-black mb-5">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6 view-task-header justify-content-center">
                                <img src={pm} alt="" className="img-fluid" />
                                <div className="text-center text-light notification-subtitle">
                                    <h1>Task notifications</h1>
                                    <h4>You have <span>7</span> new task notifications</h4>
                                </div>
                            </div>
                            <div className="col-md-5 d-flex align-items-center justify-content-center">
                                <img src={heroImage} className="img-fluid align-self-center " alt="minority logo" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* New Notification */}
                <div className="row justify-content-center">
                    <div className="col-md-8 new-notification-header ">
                        <div className="new-notification-title">
                            <h2>New</h2>
                            <p></p>
                        </div>

                    </div>
                </div>
                <div className="row root-bg">
                    <div className="col-md-12 ">
                        <div className="row d-flex justify-content-around align-items-start p-5">

                            <div className="col-md-5 planned-task mb-5">
                                <div className="row">
                                    <div className="col-md-12 planned-title">
                                        <h4><i style={{ color: '#FFC700' }} class="far fa-check-circle" /> 4 Tasks Moved To In- Progress Status </h4>
                                    </div>
                                </div>
                                <div className="row d-flex">
                                    {
                                        tasks.map((task, index) =>
                                            <TaskCard task={task} key={index} />
                                        )
                                    }
                                </div>
                            </div>

                            <div className="col-md-5 planned-task">
                                <div className="row">
                                    <div className="col-md-12 planned-title">
                                        <h4><i style={{ color: '#FFC700' }} class="far fa-check-circle" /> <span style={{ color: '#fff', fontSize: '20px' }}>3 Tasks Moved To Ready For Review Status</span> </h4>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center justify-content-center">
                                    {
                                        tasks.map((task, index) =>
                                            <TaskCard task={task} key={index} />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Earliar Notification */}
                <div className="row justify-content-center">
                    <div className="col-md-8 new-notification-header ">
                        <div className="new-notification-title">
                            <h2>Earlier</h2>
                            <p></p>
                        </div>

                    </div>
                </div>
                <div className="row root-bg">
                    <div className="col-md-12 ">
                        <div className="row d-flex justify-content-around align-items-start p-5">

                            <div className="col-md-5 planned-task">
                                <div className="row">
                                    <div className="col-md-12 planned-title">
                                        <h4><i style={{ color: '#FFC700' }} class="far fa-check-circle" /> <span style={{ color: '#fff', fontSize: '20px' }}>3 Tasks Moved To Ready For Review Status</span> </h4>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center justify-content-center">
                                    {
                                        tasks.map((task, index) =>
                                            <TaskCard task={task} key={index} />
                                        )
                                    }
                                </div>
                            </div>

                            <div className="col-md-5 planned-task">
                                <div className="row">
                                    <div className="col-md-12 planned-title">
                                        <h4><i style={{ color: '#FFC700' }} class="far fa-check-circle" /> Planned Tasks</h4>
                                    </div>
                                </div>
                                <div className="row d-flex">
                                    {
                                        tasks.map((task, index) =>
                                            <TaskCard task={task} key={index} />
                                        )
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TaskNotification;