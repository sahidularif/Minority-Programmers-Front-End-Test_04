import React from 'react';
import '../../common/common.css';
import taskUser from '../../../images/task-user.png';

const Card = (props) => {
    const {description, createdDate, type} = props.taskData;
    return (
        
            <div class="root d-flex">
                <div class="content d-flex">
                    <div className="d-flex justify-content-between">
                        <h6 className="text-right">{description}</h6>
                        <img src={taskUser} alt="" style={{ height: '50px', width: '50px' }} className="img-fluid rounded-circle" />
                    </div>
                    <div className="d-flex justify-content-between">
                        <p><i class="fas fa-flag"></i> {createdDate}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div>
                            <p>
                                <button type="button" class="btn-tag">
                                    {type[0]}
                                </button>
                            </p>
                            <p>
                                <button type="button" class="btn-tag2">
                                    {type[1]}
                                </button>
                            </p>
                        </div>
                        <div className="d-flex more-option">
                            <span>More Options <i class="fas fa-ellipsis-v"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default Card;