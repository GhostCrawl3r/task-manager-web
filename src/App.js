import React, {useEffect, useState} from "react";
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
    const screenSize = window.innerWidth;
    const [mobile,setMobile] = useState(false);
    
    useEffect(() => {
        if(screenSize < 770) {
            setMobile(true);
        }
    }, [screenSize])
    
    
  return (
          <Router>
                  {mobile === true ? (
                      <div>
                          <h1>Sorry!</h1>
                          <p>This application is intended for web devices only! - You can't view this on tablet or mobile.</p>
                      </div>
                  ) : (
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
                  )}
          </Router>
  );
}

export default App;
