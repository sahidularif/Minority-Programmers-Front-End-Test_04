import React from 'react';
import heroImage from '../../../images/heroImage.png'
import '../../common/common.css';
import './user-style.css'
import Proposals from './Proposals';
import Earn from './Earn';
import ProposalVote from './ProposalVote';
import data from '../../../Data.json';

const UserPage = () => {
    const proposals = data[1].proposals
    const proposals2 = data[1].proposals;
    const proposals3 = data[1].proposals.slice(0, 3);

    return (
        <>
            <div className="container-fluid g-0">
                <div className="row hero-user">
                    <div className="col-12 d-flex align-items-center hero-user">
                        <div className="col-md-6 text-center">
                            <h1>MY PROPOSALS</h1>
                            <h4>Proposals i have submitted to the commiunity governance.</h4>
                        </div>
                        <div className="col-md-6 d-flex align-items-center ">
                            <img src={heroImage} className="img-fluid align-self-center " alt="minority logo" />
                        </div>
                    </div>
                </div>
                <div className="row main-content">
                    <div className="col-md-12 main-content">
                        <div className="row d-flex m-5 justify-content-center align-items-center">
                            <div className="col-md-11 text-center p-3 proposals">
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
                        <div className="row d-flex justify-content-center m-5 align-items-center">

                            <div className="col-md-11 text-center proposals p-3">
                                <h3 className="text-light align-left">You Voted For The Following Proposals.</h3>
                                {
                                    proposals3.map((item) =>
                                        item.approvedStatus === null &&
                                        <ProposalVote
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
                                    )
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserPage;