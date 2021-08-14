import React, { useEffect, useState } from 'react';
import heroImage from '../../../images/Illustration.png'
import modIcon from '../../../images/mod-icon.png';
import '../../common/common.css';
import data from '../../../fakedata/Data.json';
import TaskCard from '../../common/TaskCard';

const ViewTask = () => {
    const plannedTask = data[0].tasks.slice(0, 6);
    const reviewTask = data[0].tasks.slice(0, 5);
    const completedTask = data[0].tasks.slice(0, 4);
    return (
        <>

            <div className="container-fluid body-bg">
                <div className="row">
                    <div className="col-md-12 bg-black">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-6 view-task-header">
                                <img src={modIcon} alt="" className="img-fluid" />
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
                </div>
                <div className="row root-bg">
                    <div className="col-md-12 ">
                        <div className="row d-flex justify-content-around align-items-start p-5">

                            <div className="col-md-5 planned-task mb-5">
                                <div className="row">
                                    <div className="col-md-12 planned-title">
                                        <h4><i style={{ color: '#FFC700' }} class="far fa-check-circle" /> Planned Tasks</h4>
                                    </div>
                                </div>
                                <div className="row d-flex">
                                    {
                                        plannedTask.map((task, index) =>
                                            <TaskCard task={task} key={index} />
                                        )
                                    }
                                </div>
                            </div>

                            <div className="col-md-5 planned-task">
                                <div className="row">
                                    <div className="col-md-12 planned-title">
                                        <h4><i style={{ color: '#FFC700' }} class="far fa-check-circle" /> In Review Tasks</h4>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center justify-content-center">
                                    {
                                        reviewTask.map((task, index) =>
                                            <TaskCard task={task} key={index} />
                                        )
                                    }
                                </div>
                            </div>

                            <div className="col-md-5 planned-task">
                                <div className="row">
                                    <div className="col-md-12 planned-title">
                                        <h4><i style={{ color: '#FFC700' }} class="far fa-check-circle" /> Completed Tasks</h4>
                                    </div>
                                </div>
                                <div className="row d-flex">
                                    {
                                        completedTask.map((task, index) =>
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

export default ViewTask;