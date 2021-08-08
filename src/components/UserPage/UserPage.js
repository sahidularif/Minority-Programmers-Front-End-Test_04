import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from '../../images/heroImage.png'
import '../common/common.css';
import Proposals from './Proposals';
import Earn from './Earn';
import ProposalVote from './ProposalVote';
import Navbar from '../common/Navbar';
import UserSidebar from '../pages/Sidebar/UserSidebar'
import data from '../../fakedata/Data.json';
const UserPage = () => {
    const proposals = data[1].proposals
    return (
        <>
            <div className="container-fluid g-0">
                <div className="row">
                    <div className="col-md-2 g-0">
                        <UserSidebar></UserSidebar>
                    </div>
                    <div className="col-md-10">
                        <div className="container-fluid mt-5 justify-content-center align-items-center">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-md-6 text-center">
                                    <h1>MY PROPOSALS</h1>
                                    <h4>Proposals i have submitted to the commiunity governance.</h4>
                                </div>
                                <div className="col-md-5 d-flex align-items-center ">
                                    <img src={heroImage} className="img-fluid align-self-center " alt="minority logo" />
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid proposal-container justify-content-center align-items-center">
                            <div className="row d-flex justify-content-center align-items-center g-0">
                                <div className="col-md-12 text-center m-3 proposals">
                                    {proposals.map((item) => (
                                        item.approvedStatus === null &&
                                        <Proposals
                                            key={item.id}
                                            title={item.title}
                                            type={item.type}
                                            category={item.category}
                                            createdBy={item.createdBy}
                                            createdDate={item.createdDate}
                                            replies={item.replies}
                                            totalVotes={item.totalVotes}
                                            views={item.views}
                                            description={item.description}
                                            completed={item.completedStatus}
                                        />
                                    ))}
                                    <Proposals />
                                    <hr className="line" />
                                    <Earn />
                                </div>

                            </div>
                        </div>
                        <div className="container-fluid proposal-container justify-content-center align-items-center">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-md-12 text-center proposals">
                                    <ProposalVote />
                                    <ProposalVote />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserPage;