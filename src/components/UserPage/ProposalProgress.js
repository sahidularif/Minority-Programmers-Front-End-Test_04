import React from 'react';
import './ProposalProgress.css';
import unaproved from '../../images/unaproved.png';
import planned from '../../images/planned.png';
import progress from '../../images/progress.png';
import completed from '../../images/completed.png';

const ProposalProgress = () => {
    return (
        <>
            <div className="proposal-progress">
                <div className="proposal-parcent">
                    <p className="proposal-pecent_color" style={{ width: '30%' }}></p>
                </div>
                <div className="proposal-progress-icon">
                    <div className="unaproved">
                        <img src={unaproved} alt="" />
                        <h6>Unaproved</h6>
                    </div>
                    <div className="unaproved">
                        <img src={planned} alt="" />
                        <h6>Planned</h6>
                    </div>
                    <div className="unaproved">
                        <img src={progress} alt="" />
                        <h6>Progress</h6>
                    </div>
                    <div className="unaproved">
                        <img src={completed} alt="" />
                        <h6>Completed</h6>
                    </div>
                </div>
            </div>


            
        </>
    );
};

export default ProposalProgress;