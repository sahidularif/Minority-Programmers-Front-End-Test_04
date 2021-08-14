import React from 'react';
import Topbar from './Topbar';
import ApprovedProposals from './ApprovedProposals'
const PmPage = () => {
    return (
        <>
            <section id="user">
                <Topbar />
            </section>
            <ApprovedProposals/>
        </>
    )
}

export default PmPage