import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import ViewTask from './ViewTask';

// import MyElectedProposal from './MyElectedProposal';
// import ProposalNotification from './ProposalNotification';
// import ViewTask from './ViewTask';
const CoreTeam = () => {
    return (
        <div id="manager">
            <Header />
            <Route exact path="/core-team" component={Home} />
            <Route exact path="/core-team/view-tasks" component={ViewTask} />
            {/* <Route exact path="/core-team/my-elected-proposal" component={MyElectedProposal} />
            <Route exact path="/core-team/proposal-notification" component={ProposalNotification} />
            <Route exact path="/core-team/task-status-notification" component={ViewTask} /> */}
           
        </div>
    )
}

export default CoreTeam 