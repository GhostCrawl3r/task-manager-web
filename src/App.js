import React, {useContext, useEffect, useState} from "react";
import './App.css';
import {Route, BrowserRouter as Router, Switch, useHistory} from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar.component";

//Pages
import Dashboard from "./Pages/Dashboard/Dashboard.page";
import Tasks from "./Pages/Tasks/Tasks.page";
import Analytics from "./Pages/Analytics/Analytics.component";
import UserProfile from "./Pages/UserProfile/UserProfile.component";
import Help from "./Pages/Help/Help.component";
import Login from "./Pages/Login/Login.page";

//Context
import {UserLoggedIn} from "./Context/GlobalContext";

function App() {
    const screenSize = window.innerWidth;
    const [mobile,setMobile] = useState(false);
    const [isLoggedIn, setLogin] = useContext(UserLoggedIn);
    const history = useHistory();
    
    useEffect(() => {
        if(screenSize < 950) {
            setMobile(true);
        }
    }, [screenSize])
    
  return (
         <Router>
             {mobile ? (
                 <div>
                     <h1>Sorry!</h1>
                     <p>This application is intended for web devices only! - You can't view this on tablet or mobile.</p>
                 </div>
             ) : (
         <div>
             {isLoggedIn ? (
                 <div>
                     <NavBar />
                     <Switch>
                         <Route path="/dashboard" exact component={Dashboard} />
                         <Route path="/tasks" exact component={Tasks} />
                         <Route path="/analytics" exact component={Analytics} />
                         <Route path="/user-profile" exact component={UserProfile} />
                         <Route path="/help" exact component={Help} />
                     </Switch>
                 </div>
             ) : (
                 <Route path="/" exact component={Login} />
             )}
         </div>
                 )}
         </Router>
  );
}

export default App;
