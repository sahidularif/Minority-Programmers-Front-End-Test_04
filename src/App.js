import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateTask from './components/pages/projectManagerPage/CreateTask';
import ViewTask from './components/pages/projectManagerPage/ViewTask';
import Home from './components/pages/homePage/Home';
import ProjectManager from './components/pages/projectManagerPage/ProjectManager';
import Modarator from './components/pages/Modarator/Modarator';
import MyElectedProposal from './components/pages/Modarator/MyElectedProposal';
import CoreTeam from './components/pages/CoreTeam/CoreTeam';
import NoMatch from './components/pages/NoMatch/NoMatch';
import User from './components/pages/UserPage/User';

function App() {
  return (
    <>
      <Router>
        <Switch>          
          <Route path="/user"><User /></Route>
          <Route path="/manager"><ProjectManager /></Route>
          <Route path="/modarator"><Modarator /></Route>
          <Route path="/core-team"><CoreTeam /></Route>
          <Route path="/create-task"><CreateTask /></Route>
          <Route path="/view-task"><ViewTask /></Route>
          <Route path="/view-task"><ViewTask /></Route>
          <Route exact path="/"><Home /></Route>
          <Route exact path="*"><NoMatch /></Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
