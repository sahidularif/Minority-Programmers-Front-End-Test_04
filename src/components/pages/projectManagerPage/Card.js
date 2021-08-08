import React from 'react';
import '../../common/common.css';
import taskUser from '../../../images/task-user.png';
const Card = () => {
    return (
        <div class="root d-flex">
            <div class="content d-flex">
                <div className="d-flex justify-content-between">
                    <h6 className="text-right">Lorem ipsum dolor sit amet, consecte tur adipiscing elit.</h6>
                    <img src={taskUser} alt="" style={{ height: '50px', width: '50px' }} className="img-fluid rounded-circle" />
                </div>

                <div className="d-flex justify-content-between">
                    <p><i class="fas fa-flag"></i> May 27</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                        <p>
                            <button type="button" class="btn-tag">
                                Design
                            </button>
                        </p>
                        <p>
                            <button type="button" class="btn-tag2">
                                Develop
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