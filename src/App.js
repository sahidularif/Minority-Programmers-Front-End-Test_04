import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './components/pages/Home';
import HomePage from './components/pages/homePage/HomePage';
import UserPage from './components/UserPage/UserPage';
import User from './components/UserPage/User';
import PmPage from './components/pages/projectManagerPage/PmPage';
import CreateTask from './components/pages/projectManagerPage/CreateTask';
import ViewTask from './components/pages/projectManagerPage/ViewTask';
function App() {
  return (
    <>
      <Router>
        <Switch>          
          <Route path="/user"><User /></Route>
          <Route path="/pmpage"><PmPage /></Route>
          <Route path="/create-task"><CreateTask /></Route>
          <Route path="/view-task"><ViewTask /></Route>
          <Route exact path="/"><HomePage /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
