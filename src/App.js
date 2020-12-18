import { useEffect, useState } from "react";
import "./App.css";
import BoardList from "./components/boardList/BoardList";
import PinsList from "./components/pinsList/PinsList";
import Header from "./components/header/Header";
import UserCard from "./components/userCard/UserCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BoardPage from "./pages/boardPage";
import UserProfilePage from "./pages/userProfilePage";
import HomePage from "./pages/homePage";

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
          <Route exact path="/boards/:id">
            <BoardPage />
          </Route>
          <Route exact path="/user">
            <UserProfilePage user={user} />
          </Route>
          <Route exact path="/">
            <HomePage user={user} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
