import React from 'react';
import './common.css';
import taskUser from '../../images/task-user.png';
import { FaFlag, FaEllipsisV } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TaskCard = (propos) => {
    const { description, createdDate, type, id} = propos.task;
    return (
        <div className="col-md-6 mb-2 mt-2 d-flex align-items-center">
            <div class="root d-flex align-items-center" id="task">
                <Link to={"/user/tasks/" + id} style={{textDecoration:'none'}}>
                    <div class="content d-flex">
                        <div className="d-flex justify-content-between">
                            <h6 className="text-right">{description}</h6>
                            <img src={taskUser} alt="" style={{ height: '40px', width: '40px' }} className="img-fluid rounded-circle" />
                        </div>
                        <div className="d-flex justify-content-between">
                            <p><i class="fas fa-flag"></i> May 27</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2 pt-2">
                            <div>
                                <p>
                                    <div class="design design-right">Design</div>
                                </p>
                                <p>
                                    <div class="develop develop-right">Develop</div>
                                </p>
                            </div>
                            <div className="d-flex more-option">
                                <span>More Options <i class="fas fa-ellipsis-v"></i></span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default TaskCard;