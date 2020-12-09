import { useEffect, useState } from "react";
import "./App.css";
import BoardList from "./components/boardList/BoardList";
import PinsList from "./components/pinsList/PinsList";
import Header from "./components/header/Header";
import UserCard from "./components/userCard/UserCard";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/api/users/1")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <div className="app__body">
      <Header user={user} />
      <UserCard
        avatar={user.avatar}
        userName={user.username}
        followingCount={user.following && user.following.length}
        fullName={`${user.firstName} ${user.lastName}`}
      />
      <BoardList />
      <PinsList />
    </div>
  );
}

export default App;
