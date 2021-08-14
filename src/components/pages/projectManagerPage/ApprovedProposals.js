import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from '../../../images/heroImage.png'
import pm from '../../../images/Group 1157.png';
import '../../common/common.css';
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
            <div className="container-fluid g-0 body-bg align-items-center">

                <div className="row hero-proposal d-flex justify-content-center align-items-center">
                    <div className="col-md-5">
                        <img src={pm} alt="" className="img-fluid" />
                        <h1>Approved proposals</h1>
                        <h4>Create tasks from proposals approved by core team.</h4>
                    </div>
                    <div className="col-md-5 d-flex align-items-center ">
                        <img src={heroImage} className="img-fluid align-self-center " alt="minority logo" />
                    </div>
                </div>
                <div className="row align-items-center ">

                    <div className="container-fluid proposal-container justify-content-center align-items-center">
                        <div className="row d-flex justify-content-center align-items-center g-0">
                            <div className="col-md-11 m-5 proposals">
                                {
                                    proposalData.map(proposal => <PMProposals proposal={proposal}></PMProposals>)
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ApprovedProposals;