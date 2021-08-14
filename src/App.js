import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/UserPage/User';
import CreateTask from './components/pages/projectManagerPage/CreateTask';
import ViewTask from './components/pages/projectManagerPage/ViewTask';
import Home from './components/pages/homePage/Home';
import ProjectManager from './components/pages/projectManagerPage/ProjectManager';
import Modarator from './components/pages/Modarator/Modarator';
import MyElectedProposal from './components/pages/Modarator/MyElectedProposal';
import CoreTeam from './components/pages/CoreTeam/CoreTeam';

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
          <Route exact path="/"><Home /></Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
