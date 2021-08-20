import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

import Login from "./components/Login";
import Logout from "./components/Logout";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";

function App() {
  const [color, setColor] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/color")
      .then((res) => {
        console.log(res.data);
        setColor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [color]);

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/logout">
              <a data-testid="logoutButton" href="#">
                logout
              </a>
            </Link>
          </div>
          <div>
            {localStorage.getItem("token") && (
              <div>
                <Link to="/protected">YOU SHALL NOT PASS</Link>
              </div>
            )}
          </div>
        </header>

        <Switch>
          <PrivateRoute exact path="/bubbles" component={BubblePage} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
