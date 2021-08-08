import React from 'react';
import '../common/common.css';
const Earn = () => {
    return (
        <div className="container p-5 g-0">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 d-flex border justify-content-center align-items-center rounded-3" style={{ backgroundColor: '#E3E3E3', margin: '0%', padding: '0%' }}>
                    <div className="check-minority-earn col-md-6 align-items-center justify-content-center">
                        <h5 className="mt-5">Check $ Minority earned <br /> through other activities here.</h5>
                        <p><button className="btn btn-light">Claim $ Minority</button></p>
                    </div>
                    <div className="earn-details col-md-6 align-items-center" >
                        <span>$ Minority earned through <strong style={{ color: '#151371' }}>My Proposals  -  92</strong></span>
                        <span>$ Minority earned through <strong style={{ color: '#FF00B8' }}>Other Actions  -  60</strong></span>
                        <span>$ Minority <strong style={{ color: '#FF00B8' }}>Spent</strong > over 2 months -  <strong style={{ color: '#FF00B8' }}>12</strong></span> <hr />
                        <h4><strong style={{ color: '#151371' }}>Total net $ Minority-  140</strong></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Earn;