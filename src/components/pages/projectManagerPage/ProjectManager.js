import React from 'react'
import { Route } from 'react-router-dom'
import ApprovedProposals from './ApprovedProposals'
import CreateTask from './CreateTask'
import TaskStatus from './TaskStatus'
import Topbar from './Topbar'
import ViewTask from './ViewTask';
import ReviewTask from './ReviewTask';
import TaskNotification from './TaskNotification'

const ProjectManager = () => {
    return (
        <div id="manager">
            <Topbar />
            <Route exact path="/manager" component={ApprovedProposals} />
            <Route path="/manager/View-task" component={ViewTask} />
            <Route path="/manager/create-task" component={CreateTask} />
            <Route path="/manager/planned-task-status" component={TaskStatus} />
            <Route path="/manager/task-notification" component={TaskNotification} />
        </div>
    )
}

export default ProjectManager 