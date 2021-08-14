import React, { useEffect, useState } from 'react';
import heroImage from '../../../images/modarator-hero.png'
import mi from '../../../images/mod-icon.png';
import './Modarator.css';
import '../../common/common.css';
import data from '../../../fakedata/Data.json';
import ElectProposal from './ElectProposal';
import OtherProposal from './OtherProposal';


const Home = () => {
    const tasks = data[1].proposals.slice(0, 4);
    // const items = list.slice(0, size)
    return (
        <>

            <div className="container-fluid body-bg g-0">
                <div className="row justify-content-center mb-2">
                    <div className="col-md-12 mb-5 modrator-hero-section">
                        <div className="row d-flex pt-3 pb-3 justify-content-center align-items-center ">
                            <div className="col-md-6 justify-content-center align-items-center">
                                <img src={mi} alt="6" className="img-fluid" />
                                <div className="text-center text-light modarator-hero-title">
                                    <h1>Choose proposals to be elected</h1>
                                    <p>You can elect upto 3 proposals a day from the <br /> proposals that made it to the 10 % percentile.</p>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <img src={heroImage} className="img-fluid align-self-center " alt="minority logo" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* proposal above 10% */}
                <div className="row justify-content-center">
                    <div className="col-md-10 elect-proposal-container">
                        <h2 className="proposal-content-title">Proposals that made it to the 10% percentile</h2>
                        <p>Please choose the proposals to be elected.</p>
                        {
                            tasks.map((task, index) =>
                                <ElectProposal key={index} task={task} />
                            )
                        }
                    </div>
                </div>
                {/* proposal above 10% */}
                <div className="row justify-content-center">
                    <div className="col-md-10 other-proposal-container">
                        <h2 className="proposal-content-title">Other proposals below 10% percentile</h2>
                        <p>Learn more about other proposals. Ban Users who post abusive comments.</p>
                        {
                            tasks.map((task, index) =>
                                <OtherProposal key={index} task={task} />
                            )
                        }
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;