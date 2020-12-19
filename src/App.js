import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BoardPage from "./pages/boardPage";
import UserProfilePage from "./pages/userProfilePage";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";

function App() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem('token');
  useEffect(() => {
    fetch("http://localhost:5000/api/users/5fdcd49f249641bd8e7da3cd")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <div className="app__body">
      <Router>
        <Header user={user} token={token} />
        <Switch>
          <Route exact path="/boards/:id">
            <BoardPage />
          </Route>
          <Route exact path="/user">
            {token ?
                <UserProfilePage user={user}/>
                :
                <LoginPage />
            }
          </Route>
          <Route exact path="/">
            <HomePage user={user} />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
