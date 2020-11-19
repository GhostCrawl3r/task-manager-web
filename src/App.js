import './App.css';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar.component";

//Pages
import Dashboard from "./Pages/Dashboard/Dashboard.page";
import Tasks from "./Pages/Tasks/Tasks.page";
import Analytics from "./Pages/Analytics/Analytics.component";
import UserProfile from "./Pages/UserProfile/UserProfile.component";
import Help from "./Pages/Help/Help.component";


function App() {
  return (
          <Router>
              <div>
                  <NavBar />
                      <Switch>
                          <Route path="/" exact component={Dashboard} />
                          <Route path="/tasks" exact component={Tasks} />
                          <Route path="/analytics" exact component={Analytics} />
                          <Route path="/user-profile" exact component={UserProfile} />
                          <Route path="/help" exact component={Help} />
                      </Switch>
              </div>
          </Router>
  );
}

export default App;
