import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import MyElectedProposal from './MyElectedProposal';
import ProposalNotification from './ProposalNotification';
import ViewTask from './ViewTask';
const Modarator = () => {
    return (
        <div id="manager">
            <Header />
            <Route exact path="/modarator" component={Home} />
            <Route exact path="/modarator/my-elected-proposal" component={MyElectedProposal} />
            <Route exact path="/modarator/proposal-notification" component={ProposalNotification} />
            <Route exact path="/modarator/task-status-notification" component={ViewTask} />
           
        </div>
    )
}

export default Modarator 