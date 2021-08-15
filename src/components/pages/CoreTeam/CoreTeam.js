import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import ViewTask from './ViewTask';
import ViewToDoTask from './ViewToDoTask';
import ViewInProgressTask from './ViewInProgressTask';
const CoreTeam = () => {
    return (
        <div id="manager">
            <Header />
            <Route exact path="/core-team" component={Home} />
            <Route exact path="/core-team/view-tasks" component={ViewTask} />
            <Route exact path="/core-team/tasks/:id" component={ViewToDoTask} />
            <Route exact path="/core-team/view-in-progress-tasks" component={ViewInProgressTask} />
        </div>
    )
}

export default CoreTeam