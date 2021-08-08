import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from '../../../images/heroImage.png'
import pm from '../../../images/Group 1157.png';
import '../../common/common.css';
import PMSidebar from '../Sidebar/PMSidebar';
import PMProposals from './PMProposal';
import pmProposal from '../../../fakedata/pmProposal';
const ApprovedProposals = () => {
    const [proposalData, setProposalData] = useState([]);
    useEffect(() => {
        setProposalData(pmProposal);
    }, []);
console.log(proposalData)
    return (
        <>
            <div className="container-fluid g-0 body-bg">
                <div className="row">
                    <div className="col-md-2 g-0">
                        <PMSidebar></PMSidebar>
                    </div>
                    <div className="col-md-10 bg-light g-0">
                        <div className="container-fluid justify-content-center align-items-center">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-md-6">
                                    <img src={pm} alt="" className="img-fluid" />
                                    <h1>Approved proposals</h1>
                                    <h4>Create tasks from proposals approved by core team.</h4>
                                </div>
                                <div className="col-md-5 d-flex align-items-center ">
                                    <img src={heroImage} className="img-fluid align-self-center " alt="minority logo" />
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid proposal-container justify-content-center align-items-center">
                            <div className="row d-flex justify-content-center align-items-center g-0">
                                <div className="col-md-12 m-3 proposals">
                                    {
                                        proposalData.map(proposal=><PMProposals proposal={proposal}></PMProposals>)
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

export default ApprovedProposals;