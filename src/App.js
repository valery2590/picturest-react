import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "./pages/homePage";
import BoardPage from "./pages/boardPage";
import UserProfilePage from "./pages/userProfilePage";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/users/1")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <div className="app__body">
      <Router>
          <Header user={user} />
          <Switch>
              <Route path="/boards">
                  <BoardPage />
              </Route>
              <Route path="/user">
                  <UserProfilePage user={user} />
              </Route>
              <Route path="/">
                  <HomePage user={user} />
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
